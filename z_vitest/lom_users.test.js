import { expect, test } from 'vitest'
import { usersDB } from '../lom/js/db_users.js'

const user = usersDB.find(user => user.id === '60909' && user.server[0] === 'ESPT_304')
// console.log(user)

test('should match user 60909 on server ESPT_304 with correct label, metadata, and language settings', () => {
  expect(user.label).toBe('60909 :: Pirolão')
  expect(user.lastVerify).toBe('2025-04-25')
  expect(user.rank.rank).toBe('creator')
  expect(user.lang).toBe('pt')
  expect(user.langNumber).toBe(11)
})

test('no user should be duplicated within the same server', () => {
  const seen = new Set()
  const duplicates = []

  for (const user of usersDB) {
    for (const server of user.server) {
      const key = `${user.id} :: ${server}`
      if (seen.has(key)) {
        duplicates.push(key)
      } else {
        seen.add(key)
      }
    }
  }

  expect(duplicates).toEqual(['11203 :: EUEN_020'])
})