import { elites } from './db-users-elite.js'
import { friends } from './db-users-friends.js'
import { topAM } from './db-users-top-am.js'
import { topEU } from './db-users-top-eu.js'
import { masters } from './db-users-master.js'

const users = [...friends, ...topAM, ...topEU, ...elites, ...masters].map(
  user => {
    const result = user
    result.name = [result.id, result.name].filter(e => e).join(' :: ')
    return result
  }
)

console.log('----------------------- REPEATED UID::BEGIN')
users.forEach(i => {
  const hasInstances = users.filter(j => j.id === i.id) //&& j.server[0] === i.server[0]
  if (hasInstances.length > 1) {
    console.log('-----------------------------')
    hasInstances.forEach((instance, index) => {
      console.log(index, instance.name, instance.server.join(','))
    })
  }
})
console.log('----------------------- REPEATED UID::END')

export { users as usersDB }
