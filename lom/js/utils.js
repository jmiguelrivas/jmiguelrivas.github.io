import { usersDB } from './db.js'
import { countryCodes } from './country-codes.js'

function getTooltip(item) {
  const names = item?.users?.map(user => `<li><nn-icono class="${user.group.includes('friend') ? 'heart' : 'star'}"></nn-icono> ${user.name}</li>`).join('')
  const classes = [
    'group',
    ...new Set(item?.users?.map(user => user?.group).flat()),
  ]

  return item?.users.length > 0
    ? {
        classes,
        msg: item?.users
          ? `<mr-users label="${item.val}">${names}</mr-users>`
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
    } else if (+code === 30 && +serverId > 259) {
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

function nameToDate(name) {
  const year = name.substr(1, 4)
  const month = name.substr(5, 2)
  const day = name.substr(7, 2)
  const id = name.substr(10, 1)
  const date = id
    ? `${year}-${month}-${day} (${id})`
    : [year, month, day].join('-')
  return name === 'rangesObj' ? 'Unmerged Servers' : date
}

export { getCountryCode, getTooltip, nameToDate }
