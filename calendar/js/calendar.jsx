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
  ['Transição'], //	dream – the liminal month, dreaming forward
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
  const start = dayjs(`${year}-03-20`)
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
    monthName: MONTHS_13[month]?.[0],
    monthNumber: month < 13 ? month + 1 : null,
    day: day,
    year: refYear,
  }
}

function generateDualCalendar(date) {
  const year = date.year()
  const startOfCycle = dayjs(`${year}-03-20`)
  let start, end

  // if date is before April 1st, it belongs to the previous custom year
  if (date.isBefore(startOfCycle)) {
    start = startOfCycle.subtract(1, 'year')
    end = startOfCycle.subtract(1, 'year').add(1, 'year').subtract(1, 'day')
  } else {
    start = startOfCycle
    end = startOfCycle.add(1, 'year').subtract(1, 'day')
  }

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

const Controls = ({
  date,
  currentWeekNumber,
  currentMonthName,
  changeYear,
  changeMonth,
  changeWeek,
  resetToToday,
  view,
  changeView,
}) => {
  return (
    <div className="controls">
      <div className="tabs">
        <button
          className="btn royal-purple"
          role="button"
          onClick={resetToToday}
        >
          Now
        </button>
        <button
          className="btn shamrock"
          role="button"
          onClick={() => changeView('week')}
        >
          Week
        </button>
        <button
          className="btn shamrock"
          role="button"
          onClick={() => changeView('month')}
        >
          Month
        </button>
        <button
          className="btn shamrock"
          role="button"
          onClick={() => changeView('year')}
        >
          Year
        </button>
      </div>

      {view === 'week' && (
        <>
          <div className="date-changer week-counter">
            <button
              role="button"
              className="btn sunglow"
              onClick={() => changeWeek(-1)}
            >
              <nn-icono class="arrow-chevron left" />
            </button>
            <h1>{currentWeekNumber}</h1>
            <button
              role="button"
              className="btn sunglow"
              onClick={() => changeWeek(1)}
            >
              <nn-icono class="arrow-chevron right" />
            </button>
          </div>
        </>
      )}
      {(view === 'month' || view === 'week') && (
        <>
          <div className="date-changer">
            <button
              role="button"
              className="btn sunglow"
              onClick={() => changeMonth(-1)}
            >
              <nn-icono class="arrow-chevron left" />
            </button>
            <h1>{currentMonthName}</h1>
            <button
              role="button"
              className="btn sunglow"
              onClick={() => changeMonth(1)}
            >
              <nn-icono class="arrow-chevron right" />
            </button>
          </div>
        </>
      )}

      <div className="date-changer">
        <button
          role="button"
          className="btn sunglow"
          onClick={() => changeYear(-1)}
        >
          <nn-icono class="arrow-chevron left" />
        </button>
        <h1>{date.year()}</h1>
        <button
          role="button"
          className="btn sunglow"
          onClick={() => changeYear(1)}
        >
          <nn-icono class="arrow-chevron right" />
        </button>
      </div>
    </div>
  )
}

const Year = ({ months }) => {
  return (
    <div className="year-view">
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

const Month = ({ currentMonth }) => {
  return (
    <div className="month month-view">
      {currentMonth.map((week, wi) => (
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
  )
}

const Week = ({ currentWeek }) => {
  return (
    <div className="month month-view">
      <div className="week">
        {currentWeek.map((day, di) => (
          <Day
            key={di}
            gregorian={day.gregorian}
            custom={day.custom.day}
          />
        ))}
      </div>
    </div>
  )
}

const App = () => {
  const [date, setDate] = useState(dayjs())

  const calendar = generateDualCalendar(date)
  const weeks = chunkIntoWeeks(calendar)
  const months = chunkIntoMonths(weeks)

  const currentDay = calendar.find(day => day.gregorian.isSame(date, 'day'))
  const currentMonth = months.find(month =>
    month.some(week => week.some(day => date.isSame(day.gregorian, 'day')))
  )
  const currentWeek = weeks.find(week => week.some(day => day.gregorian.isSame(date, 'day')))

  const currentMonthName = currentDay.custom.monthName
  const currentWeekNumber = weeks.indexOf(currentWeek) + 1

  const [view, setView] = useState('year')

  const changeYear = amount => {
    setDate(prev => prev.add(amount, 'year'))
  }

  const changeMonth = amount => {
    setDate(prev => prev.add(amount, 'month'))
  }

  const changeWeek = amount => {
    setDate(prev => {
      const newDate = prev.add(amount, 'week')
      return newDate
    })
  }

  const changeView = newview => {
    setView(view => newview)
  }

  const resetToToday = () => {
    setDate(dayjs())
  }

  return (
    <div className="calendar">
      <Controls
        view={view}
        date={date}
        currentMonthName={currentMonthName}
        currentWeekNumber={currentWeekNumber}
        changeYear={changeYear}
        changeMonth={changeMonth}
        changeWeek={changeWeek}
        changeView={changeView}
        resetToToday={resetToToday}
      />
      {view === 'year' && (
        <>
          <Year months={months} />
        </>
      )}
      {view === 'month' && (
        <>
          <Month currentMonth={currentMonth} />
        </>
      )}
      {view === 'week' && (
        <>
          <Week currentWeek={currentWeek} />
        </>
      )}
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
