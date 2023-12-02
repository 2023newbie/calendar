import React from 'react'
import styled from './Navbar.module.css'
import {
  FaBars,
  FaAngleLeft,
  FaAngleRight,
  FaSearch,
  FaQuestionCircle,
  FaCogs,
  FaCalendarAlt,
  FaTasks,
  FaTh,
  FaCheck,
  FaSortDown,
} from 'react-icons/fa'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import { months } from '../util/calendar'

const Navbar = () => {
  const pointDay = dayjs(useSelector(state => state.pointDay))

  return (
    <div className={`${styled.navbar} ${styled['mid-items']} ${styled.bbot}`}>
      <div className={`${styled.left} ${styled['mid-items']}`}>
        <FaBars className={`${styled.bars} ${styled['hover-rounded']}`} />
        <div className={styled.logo}>
          <img
            src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_30_2x.png"
            alt="calendar icon"
            width="40px"
          />
          <span className={styled['cursor-default']}>Calendar</span>
        </div>
        <div className={`${styled.date} ${styled['mid-items']}`}>
          <button className={styled.btn}>Today</button>
          <button className={styled['sm-btn']}>
            <FaAngleLeft className={styled['mid-items']} />
          </button>
          <button className={styled['sm-btn']}>
            <FaAngleRight className={styled['mid-items']} />
          </button>
          <span className={styled['cursor-default']}>
            {months[pointDay.month()]} {pointDay.date()}, {pointDay.year()}
          </span>
        </div>
      </div>

      <div className={`${styled.right} ${styled['mid-items']}`}>
        <span className={`${styled.icon} ${styled['hover-rounded']}`}>
          <FaSearch />
        </span>
        <span className={`${styled.icon} ${styled['hover-rounded']}`}>
          <FaQuestionCircle />
        </span>
        <span className={`${styled.icon} ${styled['hover-rounded']}`}>
          <FaCogs />
        </span>
        <button className={`${styled.btn} ${styled.pore}`}>
          Day <FaSortDown className={styled['ml-1']} />
          <ul className={styled.options}>
            <div className={`${styled.bbot} ${styled['py-1']} ${styled.opts}`}>
              <li>
                <span>Day</span>
                <span>D</span>
              </li>
              <li>
                <span>Week</span>
                <span>W</span>
              </li>
              <li>
                <span>Month</span>
                <span>M</span>
              </li>
              <li>
                <span>Year</span>
                <span>Y</span>
              </li>
              <li>
                <span>Schedule</span>
                <span>A</span>
              </li>
              <li>
                <span>4 days</span>
                <span>X</span>
              </li>
            </div>
            <div className={`${styled['py-1']} ${styled.settings}`}>
              <li className={styled.disabled}>
                <span>
                  <FaCheck />
                </span>
                <span>Show weekends</span>
              </li>
              <li>
                <span>
                  <FaCheck />
                </span>
                <span>Show declined events</span>
              </li>
              <li>
                <span>
                  <FaCheck />
                </span>
                <span>Show appointment schedules</span>
              </li>
            </div>
          </ul>
        </button>
        <div className={styled.switch}>
          <div className={styled.active}>
            <button>
              <FaCalendarAlt />
            </button>
          </div>
          <div>
            <button>
              <FaTasks />
            </button>
          </div>
        </div>
        <span className={`${styled.icon} ${styled['hover-rounded']}`}>
          <FaTh />
        </span>
        <span
          className={`${styled.icon} ${styled['hover-rounded']} ${styled.avt}`}
        >
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocLVjqnHHQXjnJ80Q-9WJW_z0cEORv95Bt_fJO_x6C31=s432-c-no"
            alt="avatar"
            width="32px"
          />
        </span>
      </div>
    </div>
  )
}

export default Navbar
