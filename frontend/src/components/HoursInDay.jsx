import React from 'react'
import styled from './HoursInDay.module.css'
import HourRow from './HourRow'

const HoursInDay = () => {
  const addTask = e => {
    console.log(e.target);
  }

  return (
    <div className={styled.container} onClick={addTask}>
      <HourRow hour='1 AM' />
      <HourRow hour='2 AM' />
      <HourRow hour='3 AM' />
      <HourRow hour='4 AM' />
      <HourRow hour='5 AM' />
      <HourRow hour='6 AM' />
      <HourRow hour='7 AM' />
      <HourRow hour='8 AM' />
      <HourRow hour='9 AM' />
      <HourRow hour='10 AM' />
      <HourRow hour='11 AM' />
      <HourRow hour='12 AM' />
      <HourRow hour='1 PM' />
      <HourRow hour='2 PM' />
      <HourRow hour='3 PM' />
      <HourRow hour='4 PM' />
      <HourRow hour='5 PM' />
      <HourRow hour='6 PM' />
      <HourRow hour='7 PM' />
      <HourRow hour='8 PM' />
      <HourRow hour='9 PM' />
      <HourRow hour='10 PM' />
      <HourRow hour='11 PM' />
      <HourRow />
    </div>
  )
}

export default HoursInDay