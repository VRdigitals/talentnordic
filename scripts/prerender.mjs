// Prerenders the app to static HTML after `vite build` + the SSR build,
// so crawlers get real content without executing JavaScript.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const template = readFileSync(path.join(root, 'dist/index.html'), 'utf-8')
const { render } = await import(pathToFileURL(path.join(root, 'dist-server/entry-server.js')))

if (!template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--app-html--> placeholder')
}
writeFileSync(path.join(root, 'dist/index.html'), template.replace('<!--app-html-->', render()))
rmSync(path.join(root, 'dist-server'), { recursive: true, force: true })
console.log('Prerendered dist/index.html')
