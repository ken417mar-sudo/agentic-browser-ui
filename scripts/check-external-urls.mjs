#!/usr/bin/env node
// Scans src/ for external image URLs in JSX/TSX files that could be blocked
// by browser ORB policy (e.g. cross-origin images in verify/demo cards).
//
// External URLs in verify surfaces cause silent verification failures:
// the image loads as 0x0 and the verify card appears to work but proves nothing.
//
// Rules:
// - Any http/https URL used as an img src or appIconSrc prop is flagged.
// - Figma MCP asset URLs (figma.com/api/mcp/asset/) are also flagged —
//   they are short-lived and must not be committed.
// - A line with the comment "// allow-external-url" is exempted.
// - Local imports (import x from '...') and relative paths are fine.

import { readFileSync, readdirSync, statSync } from 'fs'
import { join, resolve } from 'path'

const SRC_DIR = resolve('src')

const EXTERNAL_URL_RE = /(?:src|appIconSrc|href)\s*=\s*\{?\s*["'`](https?:\/\/[^"'`\s]+)["'`]/g
const FIGMA_ASSET_RE = /figma\.com\/api\/mcp\/asset\//

function walkDir(dir) {
  const results = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      results.push(...walkDir(full))
    } else if (full.endsWith('.tsx') || full.endsWith('.ts') || full.endsWith('.jsx') || full.endsWith('.js')) {
      results.push(full)
    }
  }
  return results
}

const files = walkDir(SRC_DIR)
let failures = 0

for (const file of files) {
  const content = readFileSync(file, 'utf8')
  const lines = content.split('\n')
  lines.forEach((line, i) => {
    if (line.includes('// allow-external-url')) return
    let match
    EXTERNAL_URL_RE.lastIndex = 0
    while ((match = EXTERNAL_URL_RE.exec(line)) !== null) {
      const url = match[1]
      const isFigmaAsset = FIGMA_ASSET_RE.test(url)
      const label = isFigmaAsset ? '[FAIL-FIGMA-ASSET]' : '[FAIL-EXTERNAL-URL]'
      const reason = isFigmaAsset
        ? 'Figma MCP asset URLs are short-lived and must not be committed.'
        : 'External URLs in verify/demo cards can be blocked by ORB policy.'
      console.error(`${label} ${file.replace(SRC_DIR + '/', '')}:${i + 1}`)
      console.error(`             ${url}`)
      console.error(`             ${reason}`)
      console.error(`             Use a local checked-in asset, or add // allow-external-url if intentional.`)
      failures++
    }
  })
}

if (failures > 0) {
  console.error(`\n${failures} external URL(s) found. Replace with local assets or add // allow-external-url.`)
  process.exit(1)
} else {
  console.log(`All source files pass external URL check (${files.length} files scanned).`)
}
