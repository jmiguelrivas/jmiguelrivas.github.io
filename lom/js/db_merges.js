import mergesGlobal from './db_merges_global.js'
import mergesSea from './db_merges_sea.js'
import { getCountryCode } from './utils.js'

function sortByNumberAndStringValue(a, b) {
  const numDiff = a.key.numericId - b.key.numericId
  if (numDiff !== 0) return numDiff
  return a.key.label.localeCompare(b.key.label)
}

function deepMerge(merges1, merges2) {
  /*
    Makes sure that merges with the same date don't override each other but merge into the same object

    const merges1 = {
      '2024-09-30': {
        ME_060: ['ME_061', 'RU_069', 'RU_071', 'RU_072'],
        FR_189: ['FR_190', 'FR_191', 'FR_192'],
        EUEN_168: ['EUEN_169', 'EUEN_172', 'RU_068'],
      },
    }

    const merges2 = {
      '2024-09-30': {
        EUEN_168: ['FR_189', 'ME_060'],
      },
    }

    will result into:

    const merges = {
      '2024-09-30': {
        ME_060: ['ME_061', 'RU_069', 'RU_071', 'RU_072'],
        FR_189: ['FR_190', 'FR_191', 'FR_192'],
        EUEN_168: ['EUEN_169', 'EUEN_172', 'RU_068'],
        EUEN_168: ['FR_189', 'ME_060'],
      },
    }
  */

  const result = { ...merges2 }

  for (const date in merges1) {
    if (!result[date]) {
      result[date] = { ...merges1[date] }
    } else {
      for (const key in merges1[date]) {
        if (!result[date][key]) {
          result[date][key] = [...merges1[date][key]]
        } else {
          const existing = new Set(result[date][key])
          merges1[date][key].forEach(item => existing.add(item))
          result[date][key] = Array.from(existing)
        }
      }
    }
  }

  return result
}

function removeDuplicates(matrix) {
  return [...new Set(matrix)]
}

function flatObjects(matrix) {
  const result = {}
  matrix.forEach(s => {
    Object.entries(s).forEach(([k, v]) => {
      if (result?.[k]) {
        result[k].push(...v)
        result[k] = removeDuplicates(result[k])
      } else {
        result[k] = v
      }
    })
  })
  return result
}

const merges = deepMerge(mergesSea, mergesGlobal)

const serversArray = flatObjects(Object.values(merges))

const serversKeys = Object.keys(serversArray).sort()

const fusedServers = Object.values(serversArray).flat()

const allServers = Object.entries(serversArray).map(([key, values]) => {
  const fusion = values
    .map(value => {
      return [value, serversKeys.includes(value) && serversArray[value]]
    })
    .flat(2)
    .filter(e => e)
    .sort()

  return {
    key,
    values: fusion,
  }
})

const servers = allServers
  .filter(server => {
    const currentServer = server.key
    const belongsToFusion = fusedServers.includes(currentServer)
    return !belongsToFusion
  })
  .map(item => ({
    key: getCountryCode(item.key),
    values: item.values.map(value => getCountryCode(value)),
  }))
  .sort(sortByNumberAndStringValue)

const mergesArray = Object.entries(merges)
  .map(([key, values]) => {
    const servers = Object.entries(values)
      .map(([mergeKey, mergeValues]) => {
        return {
          key: getCountryCode(mergeKey),
          values: mergeValues.sort().map(val => getCountryCode(val)),
        }
      })
      .sort(sortByNumberAndStringValue)

    return {
      date: key,
      servers,
    }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export { servers, mergesArray, merges }