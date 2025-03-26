import { elites } from './db-users-elite.js'
import { friends } from './db-users-friends.js'
import { honorMention } from './db-users-honor.js'
import { topAM } from './db-users-top-am.js'
import { topEU } from './db-users-top-eu.js'
import { masters } from './db-users-master.js'

const users = [
  ...friends,
  ...topAM,
  ...topEU,
  ...elites,
  ...honorMention,
  ...masters,
].map(user => {
  const result = user
  result.name = [result.id, result.name].filter(e => e).join(' :: ')
  return result
})

export { users as usersDB }
