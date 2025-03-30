import { usersDB } from './db-users.js'
import { countryCodes } from './country-codes.js'

function getTooltip(item, group = 0) {
  const names = item?.users
    ?.map(user => {
      let rank = user.group.join(" ")
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
    const serverId = `${str}`.slice(-3)
    const code = `${str}`.replace(serverId, '')
    let finalCode = countryCodes?.[code] || code

    if (+code === 11 && +serverId > 247) {
      finalCode = 'ESPT'
    } else if (+code === 39 && +serverId > 90) {
      finalCode = 'TR'
    } else if (+code === 30 && +serverId >= 262) {
      finalCode = 'MUSH'
    }

    const users = usersDB.filter(user => user.server.includes(+str))

    return {
      code: finalCode?.toLowerCase(),
      val: [finalCode, serverId].join('-'),
      numVal: +str,
      users,
    }
  }
}

export { getCountryCode, getTooltip }
