#!/usr/bin/env node
// Scans src/ for imports or references to assets that are marked as
// legacy/unused/must-not-render in slices-name-map.json.
//
// Some assets remain in src/assets/figma/ for historical reference but must
// not be imported or rendered (e.g. upgrade-fail-circle: Figma fill visible=false).
// This gate prevents silent re-introduction of those assets in future PRs.

import { readFileSync, readdirSync, statSync } from 'fs'
import { join, resolve } from 'path'

const SRC_DIR = resolve('src')
const SLICES_MAP = resolve('src/assets/figma/slices-name-map.json')

// Keywords that mark an asset as must-not-use in slices-name-map notes
const BANNED_KEYWORDS = [
  'must not render',
  'must-not-render',
  'do not render',
  'visible=false',
  'legacy/unused',
]

function loadSlicesMap() {
  try {
    return JSON.parse(readFileSync(SLICES_MAP, 'utf8'))
  } catch {
    return []
  }
}

function walkDir(dir) {
  const results = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      results.push(...walkDir(full))
    } else if (/\.(tsx?|jsx?|mjs|cjs)$/.test(full)) {
      results.push(full)
    }
  }
  return results
}

const slices = loadSlicesMap()

// Build set of banned filenames from slices-name-map
const bannedFiles = new Map() // filename -> note
for (const entry of slices) {
  const note = (entry.note || '').toLowerCase()
  if (BANNED_KEYWORDS.some(k => note.includes(k))) {
    for (const file of (entry.files || [])) {
      bannedFiles.set(file, entry.note)
    }
  }
}

if (bannedFiles.size === 0) {
  console.log('No banned assets found in slices-name-map.json. Skipping check.')
  process.exit(0)
}

const files = walkDir(SRC_DIR)
let failures = 0

for (const file of files) {
  const content = readFileSync(file, 'utf8')
  const lines = content.split('\n')
  lines.forEach((line, i) => {
    for (const [bannedFile, note] of bannedFiles) {
      if (line.includes(bannedFile)) {
        console.error(`[FAIL-BANNED-ASSET] ${file.replace(SRC_DIR + '/', '')}:${i + 1}`)
        console.error(`             References banned asset: ${bannedFile}`)
        console.error(`             Reason: ${note}`)
        failures++
      }
    }
  })
}

if (failures > 0) {
  console.error(`\n${failures} reference(s) to banned assets. Remove imports/usage of these assets.`)
  process.exit(1)
} else {
  console.log(`All source files pass banned-asset check (${bannedFiles.size} banned asset(s), ${files.length} files scanned).`)
}
