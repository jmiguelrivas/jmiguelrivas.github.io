import mergesGlobal from './db_merges_global.js'
import mergesSea from './db_merges_sea.js'
import mergesTW from './db_merges_tw.js'
import mergesKR from './db_merges_kr.js'
import { getCountryCode, sortByNumberAndStringValue } from './utils.js'

function buildDependencyMap(...inputs) {
  const merged = {}
  const allDependencies = new Set()

  // Merge all inputs into a flat dependency map
  for (const input of inputs) {
    for (const day of Object.values(input)) {
      for (const [key, deps] of Object.entries(day)) {
        if (!merged[key]) merged[key] = new Set()
        for (const dep of deps) {
          merged[key].add(dep)
          allDependencies.add(dep)
        }
      }
    }
  }

  // Identify root keys (those not merged into others)
  const rootKeys = Object.keys(merged).filter(key => !allDependencies.has(key))

  // Recursively resolve full dependency tree
  const result = {}

  function resolve(key, visited = new Set()) {
    if (visited.has(key)) return
    visited.add(key)

    const children = merged[key] || new Set()
    for (const child of children) {
      resolve(child, visited)
    }
  }

  for (const key of rootKeys) {
    const visited = new Set()
    resolve(key, visited)
    result[key] = [...visited].sort()
  }

  return result
}

const mergedMap = buildDependencyMap(
  mergesGlobal,
  mergesKR,
  mergesSea,
  mergesTW
)

const spreadServers = Object.entries(mergedMap).flatMap(([key, values]) => [
  key,
  ...values,
])

function expandDependencyMapWithMetadata(dependencyMap) {
  return Object.entries(dependencyMap)
    .map(([rootKey, mergedKeys]) => {
      const keyMeta = getCountryCode(rootKey)

      const values = mergedKeys.map(getCountryCode)

      return {
        key: keyMeta,
        values,
      }
    })
    .sort((a, b) => a.key.numericId - b.key.numericId)
}

const expanded = expandDependencyMapWithMetadata(mergedMap)

export { expanded as servers, spreadServers, expandDependencyMapWithMetadata }
