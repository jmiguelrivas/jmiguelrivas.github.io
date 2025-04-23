import { elites } from './db_users-elite.js'
import { friends } from './db_users-friends.js'
import { topAM } from './db_users-top-am.js'
import { topEU } from './db_users-top-eu.js'
import { masters } from './db_users-master.js'

const users = [...friends, ...topAM, ...topEU, ...elites, ...masters].map(
  user => {
    const result = user
    result.name = [result.id, result.name].filter(e => e).join(' :: ')
    return result
  }
)

function checkDuplicates() {
  console.log('----------------------- REPEATED UID::BEGIN')
  
  // const duplicates = []
  
  users.forEach(i => {
    const hasInstances = users.filter(j => j.id === i.id) //&& j.server[0] === i.server[0]
    if (hasInstances.length > 1) {
      console.log('-----------------------------')
      hasInstances.forEach((instance, index) => {
        // duplicates.push(`${index} ${instance.name} ${instance.server.join(',')}`)
        console.log(index, instance.name, instance.server.join(','))
      })
    }
  })

  // duplicates.forEach(i => console.log(i))

  console.log('----------------------- REPEATED UID::END')
}

// checkDuplicates()

export { users as usersDB }
