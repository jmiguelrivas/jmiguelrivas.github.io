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

let mod = "simple"
let language = "all"

// [
// 	"all",
// 	"amen",
// 	"es",
// 	"pt",
// 	"espt",
// 	"euen",
// 	"mush",
// 	"de",
// 	"fr",
// 	"me",
// 	"tr",
// 	"ru"
// ].forEach(lang => {
// 	document
// 		.getElementById(lang)
// 		.addEventListener("click", () => {
// 			language = lang
// 			if(mod === "expanded") {
// 				generateExpandedTable(language)
// 			} else {
// 				generateSimpleTable()
// 			}
// 	})
// })

// ------------------------------------- Extended

function generateExpandedTable(filterBy) {
	const servers = {
		...M20240708,
		...M20240722,
		...M20240805,
		...M20240819,
		...M20240902,
		...M20240930,
		...M20241111,
		...M20241111_2,
		...M20241125,
		...rangesObj,
	}
	
	const newServers = Object.keys(servers).map(i => +i)
	const mergedServers = Object.values(servers).flat().map(i => +i)
	const uniqueServers = newServers.filter(nS => !mergedServers.includes(nS))
	
	document.getElementById("content").innerHTML = `
		<table>
			<thead>
				<tr>
					<th>NEW</th>
					<th>MERGED</th>
				</tr>
			</thead>
			<tbody id="merged-list"></tbody>
		</table>
	`

	let tableBody = document.getElementById("merged-list")
	tableBody.innerHTML = ""

	function printItem(item) {
		let main
		const acc = []

		item.forEach(i => {
			main = i[0]

			const isFusion = newServers.includes(i[1].numVal)
			if(isFusion){
				const fusion = servers[i[1].numVal]
				const fusionGroup = []
				acc.push(`<span style="order:${i[1].numVal}" class="fusion ${i[1].code} ${getTooltip(i[1]).class}">${i[1].val} ${getTooltip(i[1]).msg}</span>`)
				fusion.forEach(f => {
					const fS = getCountryCode(f)
					acc.push(`<span style="order:${fS.numVal}" class="fusion ${fS.code}">${fS.val}</span>`)
				})
			} else {
				acc.push(`<span class="${i[1].code} ${getTooltip(i[1]).class}" style="order:${i[1].numVal}">${i[1].val} ${getTooltip(i[1]).msg}</span>`)
			}
		})

		const isUnique = uniqueServers.includes(main.numVal)
		const items = item.flat()
		
		if(isUnique) {	
			tableBody.innerHTML += `
			<tr>
				<td class="${main.code} ${getTooltip(main).class}">${main.val} ${getTooltip(main).msg}</td>
				<td class="merged"><div>${acc.join('')}</div></td>
			</tr>`
		}
		else if(items[0].numVal === items[1].numVal && item.flat().length === 2) {
			tableBody.innerHTML += `
			<tr>
				<td class="${main.code}">${main.val}</td>
				<td class="merged ${main.code} ${getTooltip(main).class}">${main.val} ${getTooltip(main).msg}</td>
			</tr>`
		}
	}
	
	const merged = Object.entries(servers).map(([key, values]) => {
		return values.map(value => {
			return [getCountryCode(key), getCountryCode(value)]
		})
	}).sort((a, b) => a[0][0].value - b[0][0].value).filter(serverList => {
		if(filterBy && filterBy !== 'all') {
			return serverList.some(serverRow => {
				return serverRow.some(server => server.code === filterBy)
			})
		}
		return true
	})

	merged.forEach(item => printItem(item))
}

generateExpandedTable()