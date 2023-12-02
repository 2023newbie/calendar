import React from 'react'
import styled from './DaysAndGMT.module.css'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'

const DaysAndGMT = ({ type }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const today = dayjs()
  const pointDay = dayjs(useSelector(state => state.pointDay))

  return (
    <div className={styled.container}>
      <div className={styled.GMT}>GMT+07</div>

      <div className={styled.days}>
        <div className={styled['day-date']}>
          <div
            className={`${styled.day} ${
              today.toDate().toDateString() === pointDay.toDate().toDateString()
                ? styled.point
                : ''
            }`}
          >
            {daysOfWeek[pointDay.day()].toUpperCase()}
          </div>
          <div
            className={`${styled.date} ${
              today.toDate().toDateString() === pointDay.toDate().toDateString()
                ? styled.point
                : ''
            }`}
          >
            {pointDay.date()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DaysAndGMT
