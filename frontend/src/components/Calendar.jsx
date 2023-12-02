import { useState } from 'react'
import { generateDate, months } from '../util/calendar'
import styled from './Calendar.module.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import dayjs from 'dayjs'
import { useSelector, useDispatch } from 'react-redux'
import { pickDay } from '../store/pointDay'

const Calendar = () => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const currentDate = dayjs()
  const pointDay = dayjs(useSelector(state => state.pointDay))
  
  const dispatch = useDispatch()
  
  const [pickMonth, setPickMonth] = useState([
    currentDate.month(),
    currentDate.year(),
  ]) 

  const increaseMonth = () => {
    if (pickMonth[0] < 11) {
      setPickMonth(prevState => {
        const month = prevState[0] + 1
        return [month, prevState[1]]
      })
    } else {
      setPickMonth(prevState => {
        const year = prevState[1] + 1
        return [0, year]
      })
    }
  }

  const decreaseMonth = () => {
    if (pickMonth[0] > 0) {
      setPickMonth(prevState => {
        const month = prevState[0] - 1
        return [month, prevState[1]]
      })
    } else {
      setPickMonth(prevState => {
        const year = prevState[1] - 1
        return [11, year]
      })
    }
  }

  return (
    <div className={styled.container}>
      <div className={`${styled.row1} ${styled.head}`}>
        <span>
          {months[pickMonth[0]]}, {pickMonth[1]}
        </span>
        <span className={styled.navigate}>
          <span className={styled['hover-effect']} onClick={decreaseMonth}>
            <FaChevronLeft />
          </span>
          <span className={styled['hover-effect']} onClick={increaseMonth}>
            <FaChevronRight />
          </span>
        </span>
      </div>

      <div className={styled.dates}>
        {days.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
        {generateDate(pickMonth[0], pickMonth[1]).map(
          ({ date, currentMonth, today }, index) => (
            <div
              className={`${styled.date} ${styled['hover-effect']} ${
                pointDay.$d.toString() === date.$d.toString()
                  ? styled['active-pick']
                  : ''
              } ${today ? styled['active-today'] : ''} ${
                currentMonth ? '' : styled.blur
              }`}
              key={index}
              onClick={() => dispatch(pickDay(date.toDate().toString()))}
            >
              <div>{date.date()}</div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Calendar
