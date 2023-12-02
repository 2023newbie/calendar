import React from 'react'
import styled from './HourRow.module.css'

const HourRow = ({hour}) => {
  return (
    <div className={styled.row}>
      <div className={styled.hour}>
        <span>{hour}</span>
      </div>
      <div className={styled.box}>
        
      </div>
    </div>
  )
}

export default HourRow