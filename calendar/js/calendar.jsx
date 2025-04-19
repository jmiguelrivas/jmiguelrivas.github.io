import '../../0_global/js/index.js'
import React from '../../0_global/modules/react.js'
import ReactDOMClient from '../../0_global/modules/react-dom-client.js'
import '../../0_global/modules/dayjs.min.js'

const MONTHS_13 = [
  ['Início', 'Hasiera'], //	beginning / start – the new cycle
  ['Chuva', 'Euria'], //	rain – wet season, renewal
  ['Verde', 'Berdea'], //	green – growth, blooming
  ['Brisa', 'Haizea'], //	wind – breezes, shifting air
  ['Névoa', 'Lainoa'], //	fog – soft skies, mystery
  ['Fogo', 'Sua'], //	fire – heat, dry days
  ['Cheia', 'Uholde'], //	flood – late summer storms
  ['Secura', 'Lehortu'], //	dry / wither – waning growth
  ['Ruptura', 'Haustura'], //	crack / fracture – signs of change
  ['Frio', 'Hotz'], //	cold – chill returns
  ['Neve', 'Elur'], //	snow – deep winter
  ['Gelo', 'Izoztu'], //	freeze – frost, stillness
  ['Sonho', 'Amets'], //	dream – the liminal month, dreaming forward
]

const events = [
  {
    month: 5,
    day: 5,
    title: 'Event 1',
  },
  {
    month: 10,
    day: 10,
    title: 'Event 2',
  },
  {
    month: 11,
    day: 18,
    title: 'Event 3',
  },

  {
    month: 1,
    day: 1,
    title: 'New Year',
  },
  {
    month: 7,
    day: 4,
    title: 'US Independence',
  },
  {
    month: 12,
    day: 25,
    title: 'Christmas Day',
  },
]

function get13MonthDate(date) {
  const year = date.year()
  const start = dayjs(`${year}-04-01`)
  let refYear = year

  let daysSinceStart = date.diff(start, 'day')
  if (daysSinceStart < 0) {
    const prevYearStart = start.subtract(1, 'year')
    daysSinceStart = date.diff(prevYearStart, 'day')
    refYear -= 1
  }

  const month = Math.floor(daysSinceStart / 28)
  const day = (daysSinceStart % 28) + 1
  return {
    monthName: MONTHS_13[month]?.[0] || 'Reset Day',
    monthNumber: month < 13 ? month + 1 : null,
    day: month < 13 ? day : 1,
    year: refYear,
  }
}

function generateDualCalendar(year) {
  const start = dayjs(`${year}-04-01`)
  const end = dayjs(`${year + 1}-03-31`)
  const days = []
  let current = start

  while (current.isBefore(end) || current.isSame(end)) {
    const gregorian = current
    const custom = get13MonthDate(current)
    days.push({ gregorian, custom })
    current = current.add(1, 'day')
  }
  return days
}

const chunkIntoWeeks = data => {
  const weeks = []
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7))
  }
  return weeks
}

const chunkIntoMonths = data => {
  const months = []
  for (let i = 0; i < data.length; i += 4) {
    months.push(data.slice(i, i + 4))
  }
  return months
}

let year = dayjs().year()
let weeks = chunkIntoWeeks(generateDualCalendar(year))
let months = chunkIntoMonths(weeks)

const Day = ({ gregorian, custom }) => {
  const dayGregorian = `${gregorian.$M + 1}/${gregorian.$D}`

  const localEvent = events.filter(item => item.day == gregorian.$D && item.month == gregorian.$M + 1).map(item => item.title).join(', ')

  return (
    <div
      className={`day ${localEvent ? 'event' : ''}`}
      title={localEvent}
    >
      <span className="custom">{custom}</span>
      <span className="gregorian">{dayGregorian}</span>
    </div>
  )
}

const reduceYear = amount => {
  year = dayjs(`${year}-01-01`).subtract(amount, 'year').year()
  weeks = chunkIntoWeeks(generateDualCalendar(year))
  months = chunkIntoMonths(weeks)

  console.log(year)
}

// const Week = () => {
//   return <h1>Week</h1>
// }

// const Month = () => {
//   return <h1>Month</h1>
// }

const Year = () => {
  return (
    <div className="calendar">
      <div className="controllers">
        <button
          role="button"
          onClick={() => reduceYear(1)}
        >
          <nn-icono className="arrow-chevron left" />
        </button>
        <h1>{year}</h1>
        <button
          role="button"
          onClick={() => reduceYear(-1)}
        >
          <nn-icono className="arrow-chevron right" />
        </button>
      </div>
      <div className="year">
        {months.map((month, mi) => (
          <div
            key={mi}
            className="month"
          >
            <h2 className="month-name">{month[0][0].custom.monthName}</h2>
            {month.map((week, wi) => (
              <div
                key={wi}
                className="week"
              >
                {week.map((day, di) => (
                  <Day
                    key={di}
                    gregorian={day.gregorian}
                    custom={day.custom.day}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

const App = () => {
  return <Year />
}

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(<App />)
