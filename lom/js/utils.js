import { usersDB } from './db_users.js'
import { countryCodes } from './enum_country-codes.js'

function getTooltip(item, group = 0) {
  const names = item?.users
    ?.map(user => {
      return `<li><small class="pill ${user.maxRank}">${user.maxRank}</small> ${user.label}</li>`
    })
    .join('')
  const classes = [
    'group',
    ...new Set(item?.users?.map(user => user.maxRank).flat()),
  ]

  return item?.users?.length > 0
    ? {
        classes,
        msg: item?.users
          ? `<mr-users label="${[item.label, group ? `(${group})` : null].join(
              ' '
            )}">${names}</mr-users>`
          : '',
      }
    : { classes: [], msg: '' }
}

function getCountryCode(str) {
  if (str) {
    const parts = str.split('_') 
    let id = parts[0]
    const serverId = parts[1]

    if (id === "PT" && +serverId > 247) {
      id = 'ESPT'
    } else if (id === 'ME' && +serverId > 90) {
      id = 'TR'
    } else if (id === 'EUEN' && +serverId >= 262) {
      id = 'MUSH'
    }

    const users = usersDB.filter(user => user.server.includes(str))

    return {
      id: id?.toLowerCase(),
      label: [id, serverId].join('-'),
      numericId: countryCodes?.[id],
      users,
    }
  }
}

export { getCountryCode, getTooltip }
