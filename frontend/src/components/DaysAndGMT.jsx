import React from 'react'
import styled from './DaysAndGMT.module.css'

const DaysAndGMT = ({type}) => {
  return (
    <div className={styled.container}>
      <div className={styled.GMT}>
        GMT+07
      </div>

      <div className={styled.days}>
        <div className={styled['day-date']}>
          <div className={styled.day}>FRI</div>
          <div className={styled.date}>1</div>
        </div>
      </div>
    </div>
  )
}

export default DaysAndGMT