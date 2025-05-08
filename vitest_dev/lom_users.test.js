import { expect, test } from 'vitest'
import { usersDB } from '../lom/js/db_users.js'

const user = usersDB.find(
  user => user.id === '60909' && user.server === 'ESPT_304'
)
// console.log(user)

test('should match user 60909 on server ESPT_304 with correct label, metadata, and language settings', () => {
  expect(user.label).toBe('60909 :: Pirolão')
  expect(user.lastVerify).toBe('2025-04-25')
  expect(user.rank.rank).toBe('creator')
  expect(user.lang).toBe('espt')
  expect(user.langNumber).toBe(11)
})

const seen = new Set()
const duplicates = []
for (const user of usersDB) {
  const key = `${user.id} :: ${user.server}`
  if (seen.has(key)) {
    duplicates.push(key)
  } else {
    seen.add(key)
  }
}
// console.log(duplicates)

test('no user should be duplicated within the same server', () => {
  expect(duplicates).toEqual(['11203 :: EUEN_020', '70902 :: KR_1126'])
})
