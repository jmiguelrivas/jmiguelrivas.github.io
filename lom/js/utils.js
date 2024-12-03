import { users } from './db.js'
import { countryCodes } from './country-codes.js'

function getTooltip(item) {
  return {
    class: item?.users ? 'tooltip' : '',
    msg: item?.users ? `<span class="msg">${item.users.join(', ')}</span>` : '',
  }
}

function getCountryCode(str) {
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

  return {
    code: finalCode?.toLowerCase(),
    val: [finalCode, serverId].join('-'),
    numVal: +str,
    ...(users?.[+str] && { users: users[+str] }),
  }
}

export { getCountryCode, getTooltip }
