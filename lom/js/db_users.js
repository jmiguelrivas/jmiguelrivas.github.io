import { am } from './db_users-am.js'
import { eu } from './db_users-eu.js'
import { sea } from './db_users-sea.js'
import { rank } from './enum_rank.js'

const users = [...am, ...eu, ...sea]
.sort((a, b) => {
  if (a.langNumber !== b.langNumber) {
    return a.langNumber - b.langNumber
  }
  if (a.server[0] !== b.server[0]) {
    return a.server[0].localeCompare(b.server[0])
  }
  if (a.maxRank !== b.maxRank) {
    return rank[a.maxRank] - rank[b.maxRank]
  }
  if (a.maxPosition !== b.maxPosition) {
    return a.maxPosition - b.maxPosition
  }
})

// function checkDuplicates() {
//   console.log('----------------------- REPEATED UID::BEGIN')

//   // const duplicates = []

//   users.forEach(i => {
//     const hasInstances = users.filter(j => j.id === i.id) //&& j.server[0] === i.server[0]
//     if (hasInstances.length > 1) {
//       console.log('-----------------------------')
//       hasInstances.forEach((instance, index) => {
//         // duplicates.push(`${index} ${instance.name} ${instance.server.join(',')}`)
//         console.log(index, instance.name, instance.server.join(','))
//       })
//     }
//   })

//   // duplicates.forEach(i => console.log(i))

//   console.log('----------------------- REPEATED UID::END')
// }

// checkDuplicates()

export { users as usersDB }
