import mergesGlobal from './db_merges_global.js'
import mergesSea from './db_merges_sea.js'
import mergesTW from './db_merges_tw.js'
import mergesKR from './db_merges_kr.js'
import { getCountryCode, sortByNumberAndStringValue } from './utils.js'

function deepMerge(...merges) {
  const result = {}

  for (const merge of merges) {
    for (const date in merge) {
      if (!result[date]) {
        result[date] = {}
      }

      for (const key in merge[date]) {
        if (!result[date][key]) {
          result[date][key] = [...merge[date][key]]
        } else {
          const existing = new Set(result[date][key])
          merge[date][key].forEach(item => existing.add(item))
          result[date][key] = Array.from(existing)
        }
      }
    }
  }

  return result
}

function removeDuplicates(matrix) {
  return [...new Set([...matrix])]
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

const merges = deepMerge(mergesSea, mergesGlobal, mergesTW, mergesKR)

const serversArray = flatObjects(Object.values(merges))

function mergeAllServers(serverMap) {
  const combined = []

  for (const [key, values] of Object.entries(serverMap)) {
    combined.push(key, ...values)
  }

  return removeDuplicates(combined).sort()
}

const spreadServers = mergeAllServers(serversArray)

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

export { servers, spreadServers }
