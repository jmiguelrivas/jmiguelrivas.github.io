import { countryCodes } from './enum_country-codes.js'
import { rank as rankEnum } from './enum_rank.js'

class User {
  constructor(names, server, id, rank = []) {
    this.maxRank = rankEnum[rank.map(e => rankEnum[e[0]]).sort()[0]]
    this.names = names
    this.label = [id, names[0]].filter(e => e).join(' :: ')
    this.server = server
    this.id = id
    this.lang = server[0].split('_')[0].toLowerCase()
    this.langNumber = countryCodes[server[0].split('_')[0]]
    this.rank = rank
      .filter(r => r[0] === this.maxRank)
      .sort((a, b) => new Date(b[1]) - new Date(a[1]))[0]
  }
}

export { User }
