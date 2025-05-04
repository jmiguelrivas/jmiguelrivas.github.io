import { expect, test } from 'vitest'
import { usersDB } from '../lom/js/db_users.js'

const user = usersDB.find(user => user.id === '60909' && user.server[0] === 'ESPT_304')
// console.log(user)

test('check for user match', () => {
  expect(user.label).toBe('60909 :: Pirolão')
  expect(user.lastVerify).toBe('2025-04-25')
  expect(user.rank.rank).toBe('creator')
  expect(user.lang).toBe('pt')
  expect(user.langNumber).toBe(11)
})
