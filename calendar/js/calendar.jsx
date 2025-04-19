import '../../0_global/js/index.js'
// import React from '../../0_global/modules/react.js'
// import ReactDOMClient from '../../0_global/modules/react-dom-client.js'

import React, { useState } from 'https://esm.sh/react@19'
import { createRoot } from 'https://esm.sh/react-dom@19/client'

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
    monthName: MONTHS_13[month]?.[0] || 'Reset',
    monthNumber: month < 13 ? month + 1 : null,
    day: day,
    year: refYear,
  }
}

function generateDualCalendar(date) {
  const year = date
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

const Day = ({ gregorian, custom }) => {
  const dayGregorian = `${gregorian.$M + 1}/${gregorian.$D}`

  const currentDay = dayjs().isSame(gregorian, 'day')

  const localEvent = events
    .filter(item => item.day == gregorian.$D && item.month == gregorian.$M + 1)
    .map(item => item.title)
    .join(', ')

  return (
    <div
      className={['day', localEvent && 'event', currentDay && 'current'].join(' ')}
      title={localEvent}
    >
      <span className="custom">{custom}</span>
      <span className="gregorian">{dayGregorian}</span>
    </div>
  )
}

const Controls = ({ date, changeDate }) => {
  return (
    <div className="controls">
      <div className="tabs">
        <button
          className="btn shamrock"
          role="button"
        >
          Week
        </button>
        <button
          className="btn shamrock"
          role="button"
        >
          Month
        </button>
        <button
          className="btn shamrock"
          role="button"
        >
          Year
        </button>
      </div>
      <div className="date-changer">
        <button
          role="button"
          className="btn sunglow"
          onClick={() => changeDate(1)}
        >
          <nn-icono class="arrow-chevron left" />
        </button>
        <h1>{date}</h1>
        <button
          role="button"
          className="btn sunglow"
          onClick={() => changeDate(-1)}
        >
          <nn-icono class="arrow-chevron right" />
        </button>
      </div>
    </div>
  )
}

const Year = ({ months }) => {
  return (
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
  )
}

const App = () => {
  const [date, setDate] = useState(dayjs())

  const year = date.year()
  const weeks = chunkIntoWeeks(generateDualCalendar(year))
  const months = chunkIntoMonths(weeks)

  const changeYear = amount => {
    setDate(prev => prev.subtract(amount, 'year'))
  }

  return (
    <div className="calendar">
      <Controls
        date={year}
        changeDate={changeYear}
      />
      <Year months={months} />
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
