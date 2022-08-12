import { join } from 'path'
import { readFileSync, writeFileSync } from 'fs'
import pack from '../package.json' assert { type: 'json' }
import postcss from 'postcss'
import url from 'postcss-url'

// Base constants
const root = process.cwd()
const now = new Date().toJSON()
const inline = url({ url: 'inline' })

// Helper functions
export function readPath(path) {
  return readFileSync(path, 'utf8')
}

export function faFree(name) {
  return join(root, 'jsweb-packs', 'unpkg', 'css', `${name}.min.css`)
}

export function mapNamePath(name) {
  return { name: `fa-${name}`, path: faFree(name) }
}

export function mapDataCode(data) {
  return { ...data, code: readPath(data.path) }
}

export function mapReplace(data) {
  return {
    ...data,
    code: data.code.replace(/,url\(.+truetype"\)/g, ''),
  }
}

export async function mapCssBuild(data) {
  try {
    const css = await postcss()
      .use(inline)
      .process(data.code, { from: data.path })

    writeDist(data.name, css)

    return css
  } catch (error) {
    console.log('Error:', error)
    return `/*** Error: ${error} ***/`
  }
}

export function writeDist(name, data) {
  const path = join(root, 'dist', `${name}.css`)
  const template = [
    '/*!',
    ` * ${pack.name}`,
    ` * @version ${pack.version}`,
    ` * @desc ${pack.description}`,
    ` * @author ${pack.author}`,
    ' * @create date 2017-07-03 17:05:00',
    ` * @modify date ${now}`,
    ' */',
  ]
  const result = template.concat(data).join('\n')

  writeFileSync(path, result)
}
