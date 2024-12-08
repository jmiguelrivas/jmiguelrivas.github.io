import { usersDB } from './db.js'
import { countryCodes } from './country-codes.js'

function getTooltip(item) {
  const names = item?.users?.map(user => user.name).join(',\n')
  const classes = item?.users?.some(user => user?.group) ? ['top'] : []
  return item?.users.length > 0 ?{
    classes,
    msg: item?.users ? `<nn-ayuda>${names}</nn-ayuda>` : '',
  } : {classes: [], msg: ''}
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

    const users = usersDB.filter(user => user.server === +str)

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
