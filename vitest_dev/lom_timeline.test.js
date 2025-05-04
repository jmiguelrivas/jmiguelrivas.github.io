import { expect, test } from 'vitest'
import { servers } from '../lom/js/db_merges.js'

const pt169 = servers.find(server => server.key.label === 'PT-169')
// console.log(pt169)

const users = [
  pt169.key.users.map(user => user.id),
  ...pt169.values.map(server => {
    return server.users.map(user => user.id)
  }),
]
  .flat()
  .sort()
// console.log(users)

const serversList = [
  pt169.key.label,
  ...pt169.values.map(server => server.label),
]
// console.log(serversList)

test('should return the correct list of server labels for PT-169 and its merged servers', () => {
  expect(serversList).toEqual([
    'PT-169',
    'PT-170',
    'PT-171',
    'PT-172',
    'PT-173',
    'PT-174',
    'PT-175',
    'PT-176',
    'PT-177',
    'PT-178',
    'PT-179',
  ])
})

test('should return a sorted list of user IDs across PT-169 and all merged servers', () => {
  expect(users).toEqual([
    '11F08',
    '2190B',
    '31003',
    '4010F',
    '40301',
    '4040C',
    '40501',
    '7080D',
    '71B0B',
    '8010A',
    '8090b',
    '81302',
    '90709',
    'A0107',
    'B0D03',
    'C0400',
    'C0508',
    'C0800',
    'C080F',
    'E0F0B',
  ])
})
