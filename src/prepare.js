import stylus from 'stylus'
import {
  faFree,
  readPath,
  writeDist,
  mapNamePath,
  mapDataCode,
  mapCleanCode,
  mapReplace,
} from './helpers'

// Base constants
const faClasses = readPath(faFree('fontawesome'))

// Copy fa-base
writeDist('fa-base', faClasses)

// Map helpers
const fonts = ['brands', 'regular', 'solid']
  .map(mapNamePath)
  .map(mapDataCode)
  .map(mapCleanCode)
  .map(mapReplace)
  .map(data => {
    stylus(data.code)
      .set('filename', data.path)
      .define('url', stylus.url({ limit: false }))
      .render((err, css) => {
        if (err) {
          console.log(data.name, 'error:', err)
        } else {
          data.code = css
          writeDist(data.name, css)
        }
      })

    return data
  })

const allFonts = fonts.map(data => data.code).join(' ')

writeDist('fa-all', faClasses.concat('\n', allFonts))
