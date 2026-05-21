#!/usr/bin/env node
// Scans src/assets/figma/*.svg for empty payloads (no visible geometry).
// An SVG is considered empty if it contains no path, circle, ellipse, rect,
// polygon, polyline, or line elements with non-empty content.
//
// Intentionally empty assets (e.g. fill=visible:false in Figma source) must
// have a note in slices-name-map.json explaining why. Without a note, the
// gate fails so agents cannot silently hand-author geometry for hidden fills.

import { readFileSync, readdirSync } from 'fs'
import { join, resolve } from 'path'

const ASSETS_DIR = resolve('src/assets/figma')
const SLICES_MAP = resolve('src/assets/figma/slices-name-map.json')

const GEOMETRY_TAGS = ['path', 'circle', 'ellipse', 'rect', 'polygon', 'polyline', 'line']

function hasVisibleGeometry(svgContent) {
  return GEOMETRY_TAGS.some(tag => {
    const re = new RegExp(`<${tag}[^/]*(?:/>|>[^<]*</${tag}>)`, 'i')
    return re.test(svgContent)
  })
}

function loadSlicesMap() {
  try {
    return JSON.parse(readFileSync(SLICES_MAP, 'utf8'))
  } catch {
    return []
  }
}

function getNoteForFile(slices, filename) {
  for (const entry of slices) {
    if (Array.isArray(entry.files) && entry.files.includes(filename)) {
      return entry.note || null
    }
  }
  return null
}

const slices = loadSlicesMap()
const svgFiles = readdirSync(ASSETS_DIR).filter(f => f.endsWith('.svg'))

let failures = 0

for (const file of svgFiles) {
  const content = readFileSync(join(ASSETS_DIR, file), 'utf8')
  if (!hasVisibleGeometry(content)) {
    const note = getNoteForFile(slices, file)
    if (note) {
      console.log(`[ok-exempt]  ${file}`)
      console.log(`             note: ${note}`)
    } else {
      console.error(`[FAIL-EMPTY] ${file}`)
      console.error(`             No visible geometry and no slices-name-map note.`)
      console.error(`             Check Figma layer fill/visibility before hand-authoring geometry.`)
      console.error(`             If intentionally empty, add a "note" to slices-name-map.json.`)
      failures++
    }
  }
}

if (failures > 0) {
  console.error(`\n${failures} empty SVG(s) without exemption note. Fix or add notes to slices-name-map.json.`)
  process.exit(1)
} else {
  console.log(`\nAll SVG assets pass empty-geometry check (${svgFiles.length} files scanned).`)
}
