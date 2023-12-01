import styled from './Calendar.module.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Calendar = () => {
  return (
    <div className={styled.container}>
      <div className={`${styled.row1} ${styled.head}`}>
        <span>December 2023</span>
        <span className={styled.navigate}>
          <span className={styled['hover-effect']}>
            <FaChevronLeft />
          </span>
          <span className={styled['hover-effect']}>
            <FaChevronRight />
          </span>
        </span>
      </div>

      <div className={`${styled.row} ${styled.day}`}>
        <span>S</span>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
      </div>

      <div className={styled.row}>
        <span className={`${styled['hover-effect']} ${styled.blur}`}>26</span>
        <span className={`${styled['hover-effect']} ${styled.blur}`}>27</span>
        <span className={`${styled['hover-effect']} ${styled.blur}`}>28</span>
        <span className={`${styled['hover-effect']} ${styled.blur}`}>29</span>
        <span className={`${styled['hover-effect']} ${styled.blur}`}>30</span>
        <span className={`${styled['hover-effect']} ${styled['active-today']}`}>1</span>
        <span className={styled['hover-effect']}>2</span>
      </div>

      <div className={styled.row}>
        <span className={styled['hover-effect']}>3</span>
        <span className={styled['hover-effect']}>4</span>
        <span className={styled['hover-effect']}>5</span>
        <span className={styled['hover-effect']}>6</span>
        <span className={styled['hover-effect']}>7</span>
        <span className={`${styled['hover-effect']} ${styled['active-pick']}`}>8</span>
        <span className={styled['hover-effect']}>9</span>
      </div>

      <div className={styled.row}>
        <span className={styled['hover-effect']}>10</span>
        <span className={styled['hover-effect']}>11</span>
        <span className={styled['hover-effect']}>12</span>
        <span className={styled['hover-effect']}>13</span>
        <span className={styled['hover-effect']}>14</span>
        <span className={styled['hover-effect']}>15</span>
        <span className={styled['hover-effect']}>16</span>
      </div>

      <div className={styled.row}>
        <span className={styled['hover-effect']}>17</span>
        <span className={styled['hover-effect']}>18</span>
        <span className={styled['hover-effect']}>19</span>
        <span className={styled['hover-effect']}>20</span>
        <span className={styled['hover-effect']}>21</span>
        <span className={styled['hover-effect']}>22</span>
        <span className={styled['hover-effect']}>23</span>
      </div>

      <div className={styled.row}>
        <span className={styled['hover-effect']}>24</span>
        <span className={styled['hover-effect']}>25</span>
        <span className={styled['hover-effect']}>26</span>
        <span className={styled['hover-effect']}>27</span>
        <span className={styled['hover-effect']}>28</span>
        <span className={styled['hover-effect']}>29</span>
        <span className={styled['hover-effect']}>30</span>
      </div>

      <div className={styled.row}>
        <span className={styled['hover-effect']}>31</span>
        <span className={`${styled['hover-effect']} ${styled.blur}`}>1</span>
        <span className={`${styled['hover-effect']} ${styled.blur}`}>2</span>
        <span className={`${styled['hover-effect']} ${styled.blur}`}>3</span>
        <span className={`${styled['hover-effect']} ${styled.blur}`}>4</span>
        <span className={`${styled['hover-effect']} ${styled.blur}`}>5</span>
        <span className={`${styled['hover-effect']} ${styled.blur}`}>6</span>
      </div>
    </div>
  )
}

export default Calendar
