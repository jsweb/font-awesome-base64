import {
  faFree,
  readPath,
  writeDist,
  mapNamePath,
  mapDataCode,
  mapCleanCode,
  mapReplace,
  mapCssBuild,
} from './helpers'

// Map helpers
const parts = ['brands', 'regular', 'solid']
  .map(mapNamePath)
  .map(mapDataCode)
  .map(mapCleanCode)
  .map(mapReplace)
  .map(mapCssBuild)

Promise.all(parts).then((styles) => console.log(styles))

// Copy fa-base
const faClasses = readPath(faFree('fontawesome'))
writeDist('fa-base', faClasses)

// Build all icons
// const allFonts = fonts.concat(faClasses).join('\n')
// console.log(fonts)
// writeDist('fa-all', allFonts.concat('\n', faClasses))
