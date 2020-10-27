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

const allFonts = fonts.map((data) => data.code).join('\n')
const faClasses = readPath(faFree('fontawesome'))

// Copy fa-base
writeDist('fa-base', faClasses)

// Build all icons
writeDist('fa-all', allFonts.concat('\n', faClasses))
