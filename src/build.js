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

// Copy fa-base
const faClasses = readPath(faFree('fontawesome'))
writeDist('fa-base', faClasses)

// Map helpers
const parts = ['brands', 'regular', 'solid']
  .map(mapNamePath)
  .map(mapDataCode)
  .map(mapCleanCode)
  .map(mapReplace)
  .map(mapCssBuild)

// Proccess all styles
Promise.all(parts).then((styles) => {
  const allFonts = styles.concat(faClasses).join('\n')
  writeDist('fa-all', allFonts.concat('\n', faClasses))
})
