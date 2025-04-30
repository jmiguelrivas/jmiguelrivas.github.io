import { usersDB } from './db_users.js'
import { countryCodes } from './enum_country-codes.js'

function getTooltip(item, group = 0) {
  const names = item?.users
    ?.map(user => {
      const warning = !user?.lastVerify
        ? `
          <nn-icono class="exclamation pill sunglow" title="Old Entry"></nn-icono>
        `
        : ''
      const rank = `        
        <small class="pill ${user.maxRank}">
          ${[user.maxRank, user.maxPosition].filter(Boolean).join(' :: ')}
        </small>
      `
      return `<li>${rank} ${user.label} ${warning}</li>`
    })
    .join('')
  const classes = ['group']

  return item?.users?.length > 0
    ? {
        classes,
        msg: item?.users
          ? `<mr-users label="${[item.label, group ? `(${group})` : null].join(
              ' '
            )}">${names}</mr-users>`
          : '',
      }
    : {
        classes: [],
        msg: '',
      }
}

function validateCountryCode(id, serverId) {
  if (id === 'PT' && +serverId > 247) {
    return 'ESPT'
  } else if (id === 'ME' && +serverId > 90) {
    return 'TR'
  } else if (id === 'EUEN' && +serverId >= 262) {
    return 'MUSH'
  }
  return id
}

function getCountryCode(str) {
  if (str) {
    const parts = str.split('_')
    let id = parts[0]
    const serverId = parts[1]

    id = validateCountryCode(id, serverId)

    const users = usersDB.filter(user => user.server.includes(str))

    return {
      id: id?.toLowerCase(),
      label: [id, serverId].join('-'),
      numericId: countryCodes?.[id],
      users,
    }
  }
}

function sortByNumberAndStringValue(a, b) {
  const numDiff = a.key.numericId - b.key.numericId
  if (numDiff !== 0) return numDiff
  return a.key.label.localeCompare(b.key.label)
}

export { getCountryCode, getTooltip, validateCountryCode, sortByNumberAndStringValue }
