import {
  faFree,
  readPath,
  writeDist,
  mapNamePath,
  mapDataCode,
  mapReplace,
  mapCssBuild,
} from './helpers.mjs'

// Copy fa-base
const faClasses = readPath(faFree('fontawesome'))
writeDist('fa-base', faClasses)

// Map helpers
const parts = ['brands', 'regular', 'solid']
  .map(mapNamePath)
  .map(mapDataCode)
  .map(mapReplace)
  .map(mapCssBuild)

// Process all styles
Promise.all(parts).then((styles) => {
  const allFonts = styles.concat(faClasses).join('\n')
  writeDist('fa-all', allFonts.concat('\n', faClasses))
})
