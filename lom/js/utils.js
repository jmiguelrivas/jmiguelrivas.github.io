import { usersDB } from './db_users.js'
import { countryCodes } from './enum_country-codes.js'

function getTooltip(item, group = 0) {
  const names = item?.users
    ?.map(user => {
      let rank = user.group.join(' ')
      return `<li><small class="pill ${rank}">${rank}</small> ${user.name}</li>`
    })
    .join('')
  const classes = [
    'group',
    ...new Set(item?.users?.map(user => user?.group).flat()),
  ]

  return item?.users?.length > 0
    ? {
        classes,
        msg: item?.users
          ? `<mr-users label="${[item.val, group ? `(${group})` : null].join(
              ' '
            )}">${names}</mr-users>`
          : '',
      }
    : { classes: [], msg: '' }
}

function getCountryCode(str) {
  if (str) {
    const parts = str.split('_') 
    let code = parts[0]
      // `${str}`.length === 5 ? `${str}`.slice(0, 2) : `${str}`.slice(0, 1)
    const serverId = parts[1] //`${str}`.slice(-3)
    // let finalCode = countryCodes?.[code] || code

    if (code === "PT" && +serverId > 247) {
      code = 'ESPT'
    } else if (code === 'ME' && +serverId > 90) {
      code = 'TR'
    } else if (code === 'EUEN' && +serverId >= 262) {
      code = 'MUSH'
    }

    const users = usersDB.filter(user => user.server.includes(+str))

    return {
      code: code?.toLowerCase(),
      val: [code, serverId].join('-'),
      numVal: countryCodes?.[code],
      users,
    }
  }
}

export { getCountryCode, getTooltip }
