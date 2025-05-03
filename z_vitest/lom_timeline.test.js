import { expect, test } from 'vitest'
import { servers } from '../lom/js/db_merges.js'

const pt169 = servers.find(server => server.key.label === 'PT-169')

const users = pt169.values
  .map(server => {
    return server.users.map(user => user.label)
  })
  .flat()
  .filter(Boolean)

const serversList = [
  pt169.key.label,
  ...pt169.values.map(server => server.label),
]

test('pt-169 servers list verification', () => {
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

test('pt-169 users list verification', () => {
  expect(users).toEqual([
    'E0F0B :: BabaYaga',
    '81302 :: Benimaru',
    '8010A :: Luffy',
    '40301 :: Doruk',
    '4010F :: Hakan',
    'C080F :: kirito',
    '90709 :: LimRabei',
    '8090b :: Ummabel',
    '31003 :: Fenix',
    'B0D03 :: Migatte',
    '71B0B :: Colt75',
    '4040C :: Goddess',
    'C0400 :: n17',
    '2190B :: Gogeta',
    '40501 :: Pluton',
    '7080D :: Luxury',
  ])
})
