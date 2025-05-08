import { expect, test } from 'vitest'
import { servers } from '../lom/js/db_merges.js'

const amen280 = servers.find(server => server.key.label === 'AMEN_280')
// console.log(amen280)

const users = [
  amen280.key.users.map(user => user.id),
  ...amen280.values.map(server => {
    return server.users.map(user => user.id)
  }),
]
  .flat()
  .sort()
// console.log(users)

const serversList = amen280.values.map(server => server.label)
// console.log(serversList)

test('should return the correct list of server labels for AMEN_280 and its merged servers', () => {
  expect(serversList).toEqual([
    'AMEN_280',
    'AMEN_281',
    'AMEN_282',
    'AMEN_283',
    'AMEN_284',
    'AMEN_285',
    'AMEN_286',
    'AMEN_287',
    'AMEN_288',
    'AMEN_289',
    'AMEN_290',
    'AMEN_291',
    'AMEN_292',
    'AMEN_293',
    'AMEN_294',
    'AMEN_295',
    'AMEN_296',
    'AMEN_297',
    'AMEN_298',
    'AMEN_299',
    'AMEN_300',
    'AMEN_301',
    'ES_096',
    'ES_097',
    'ES_098',
    'ES_099',
    'ES_100',
    'ES_101',
    'ES_102',
    'PT_169',
    'PT_170',
    'PT_171',
    'PT_172',
    'PT_173',
    'PT_174',
    'PT_175',
    'PT_176',
    'PT_177',
    'PT_178',
    'PT_179',
  ])
})

test('should return a sorted list of user IDs across AMEN_280 and all merged servers', () => {
  expect(users).toEqual([
    '0180E',
    '0180E',
    '11F08',
    '2190B',
    '31003',
    '32003',
    '4010F',
    '40301',
    '4040C',
    '40501',
    '50502',
    '5070A',
    '7080D',
    '71A00',
    '71B0B',
    '80101',
    '80101',
    '8010A',
    '8010B',
    '8090b',
    '80D0C',
    '81302',
    '90504',
    '90709',
    'A0107',
    'A040B',
    'A040B',
    'B0401',
    'B0B0E',
    'B0D03',
    'C0400',
    'C0508',
    'C0800',
    'C080F',
    'C0B04',
    'C0B04',
    'C0D07',
    'C0D07',
    'E0F0B',
    'F0E05',
  ])
})
