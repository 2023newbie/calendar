import DaysAndGMT from '../components/DaysAndGMT'
import HoursInDay from '../components/HoursInDay'
import styled from './DayScreen.module.css'

const DayScreen = () => {
  return (
    <div className={styled.container}>
      <DaysAndGMT />
      <HoursInDay />
    </div>
  )
}

export default DayScreen

