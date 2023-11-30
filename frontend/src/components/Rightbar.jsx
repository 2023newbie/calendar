import styled from './Rightbar.module.css'
import { FaPlus, FaAngleRight } from "react-icons/fa"

const Rightbar = () => {
  return (
    <div className={styled.container}>
      <div className={styled.bbot}>
        <div className={`${styled.keep} ${styled.btn}`}/>
        <div className={`${styled.tasks} ${styled.btn}`}/>
        <div className={`${styled.contacts} ${styled.btn}`}/>
        <div className={`${styled.maps} ${styled.btn}`}/>
      </div>
      <div className={styled.btn}><FaPlus /></div>
      <div className={`${styled.btn} ${styled.toggle}`}><FaAngleRight /></div>
    </div>
  )
}

export default Rightbar