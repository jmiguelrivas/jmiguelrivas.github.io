import { countryCodes } from './enum_country-codes.js'
import { rank as rankEnum } from './enum_rank.js'

class User {
  constructor(names, server, id, ranks = []) {
    this.names = names
    this.server = server
    this.id = id

    this.label = [id, names[0]].filter(Boolean).join(' :: ')
    this.lang = server[0].split('_')[0].toLowerCase()
    this.langNumber = countryCodes[server[0].split('_')[0]]

    // Find the most recent entry for each rank
    const latestByRank = new Map()
    for (const entry of ranks) {
      const current = latestByRank.get(entry.rank)
      if (!current || new Date(entry.date) > new Date(current.date)) {
        latestByRank.set(entry.rank, entry)
      }
    }

    this.ranks = Array.from(latestByRank.values())

    this.maxRank =
      rankEnum[this.ranks.map(r => rankEnum[r.rank]).sort((a, b) => a - b)[0]]

    // Get top position (lowest number)
    this.maxPosition = Math.min(...this.ranks.map(r => r.position ?? undefined))

    // Most recent record for the highest rank
    this.rank = this.ranks
      .filter(r => r.rank === this.maxRank)
      .sort((a, b) => new Date(b.date) - new Date(a.date))[0]
  }
}

export { User }
