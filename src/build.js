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
const fonts = ['brands', 'regular', 'solid']
  .map(mapNamePath)
  .map(mapDataCode)
  .map(mapCleanCode)
  .map(mapReplace)
  .map(mapCssBuild)

// Copy fa-base
const faClasses = readPath(faFree('fontawesome'))
writeDist('fa-base', faClasses)

// Build all icons
const allFonts = fonts.map((data) => data.code).join('\n')
console.log(allFonts)
// writeDist('fa-all', allFonts.concat('\n', faClasses))
