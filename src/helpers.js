import { join } from 'path'
import { readFileSync, writeFileSync } from 'fs'

const root = process.cwd()

// Helper functions
export function readPath(path) {
  return readFileSync(path, 'utf8')
}

export function faFree(name) {
  return join(
    root,
    'node_modules',
    '@fortawesome',
    'fontawesome-free',
    'css',
    `${name}.min.css`,
  )
}

export function mapNamePath(name) {
  return { name: `fa-${name}`, path: faFree(name) }
}

export function mapDataCode(data) {
  return { ...data, code: readPath(data.path) }
}

export function mapCleanCode(data) {
  return {
    ...data,
    code: data.code
      .split('\n')
      .slice(4)
      .join(' '),
  }
}

export function mapReplace(data) {
  return {
    ...data,
    code: data.code.replace(/eot\);.+svg"\)}/g, 'woff2) format("woff2")}'),
  }
}

export function writeDist(name, data) {
  const path = join(root, 'dist', `${name}.css`)
  writeFileSync(path, data)
}
