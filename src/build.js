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

// Base constants
const faClasses = readPath(faFree('fontawesome'))

// Map helpers
const fonts = ['brands', 'regular', 'solid']
  .map(mapNamePath)
  .map(mapDataCode)
  .map(mapCleanCode)
  .map(mapReplace)
  .map(mapCssBuild)

const allFonts = fonts.map((data) => data.code).join(' ')

// Copy fa-base
writeDist('fa-base', faClasses)

// Build all icons
writeDist('fa-all', faClasses.concat('\n', allFonts))
