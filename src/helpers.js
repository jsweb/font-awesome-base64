import { join } from 'path'
import { readFileSync, writeFileSync } from 'fs'
import stylus from 'stylus'
import pack from '../package.json'

// Base constants
const root = process.cwd()
const now = new Date().toJSON()

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
    code: data.code.split('\n').slice(4).join(' '),
  }
}

export function mapReplace(data) {
  return {
    ...data,
    code: data.code.replace(/eot\);.+svg"\)}/g, 'woff2) format("woff2")}'),
  }
}

export function mapCssBuild(data) {
  stylus(data.code)
    .set('filename', data.path)
    .define('url', stylus.url({ limit: false }))
    .render((err, css) => {
      if (err) {
        console.log(data.name, 'error:', err)
      } else {
        data.code = [
          '/*!',
          ` * ${pack.name}`,
          ` * @version ${pack.version}`,
          ` * @desc ${pack.description}`,
          ` * @author ${pack.author}`,
          ' * @create date 2017-07-03 17:05:00',
          ` * @modify date ${now}`,
          ' */',
          css,
        ].join('\n')

        writeDist(data.name, data.code)
      }
    })

  return data
}

export function writeDist(name, data) {
  const path = join(root, 'dist', `${name}.css`)
  writeFileSync(path, data)
}
