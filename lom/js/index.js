import '../../_global/js/index.js'
import {
  M20241125,
  M20241111_2,
  M20241111,
  M20240930,
  M20240902,
  M20240819,
  M20240805,
  M20240722,
  M20240708,
  rangesObj,
} from './db.js'
import { getCountryCode, getTooltip } from './utils.js'

function generateSimpleTable() {
  const servers = {
    M20241125,
    M20241111_2,
    M20241111,
    M20240930,
    M20240902,
    M20240819,
    M20240805,
    M20240722,
    M20240708,
    rangesObj,
  }

  document.getElementById('content').innerHTML = ''

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

  const mergeList = Object.entries(servers).map(([mergeKey, mergeValues]) => {
    const serversList = Object.entries(mergeValues).map(
      ([serverKey, serverValues]) => {
        return {
          newServer: getCountryCode(serverKey),
          mergedServer: serverValues.map(item => getCountryCode(item)),
        }
      }
    )

    return {
      title: nameToDate(mergeKey),
      servers: serversList,
    }
  })

  mergeList.forEach(merge => {
    const tableBody = merge.servers.map(server => {
      const merged = server.mergedServer.map(item => {
        return `<span style="order:${item.numVal}" class="${item.code} ${
          getTooltip(item).class
        }">${item.val} ${getTooltip(item).msg}</span>`
      })

      return `
			<tr>
				<td class="${server.newServer.code} ${getTooltip(server.newServer).class}">${
        server.newServer.val
      } ${getTooltip(server.newServer).msg}</td>
				<td class="merged"><div>${merged.join('')}</div></td>
			</tr>`
    })

    document.getElementById('content').innerHTML += `
			<h2>--- ${merge.title} ---</h2>
			<table>
				<thead>
					<tr>
						<th>NEW</th>
						<th>MERGED</th>
					</tr>
				</thead>
				<tbody>${tableBody.join('')}</tbody>
			</table>
		`
  })
}

generateSimpleTable()
