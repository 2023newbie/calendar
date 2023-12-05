import { useState } from 'react'
import Calendar from './Calendar'
import styled from './Leftbar.module.css'
import { FaCaretDown, FaChevronDown, FaPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { open } from '../store/modal'

const Leftbar = () => {
  const [isShow, setIsShow] = useState(false)
  const dispatch = useDispatch()

  const openModal = () => {
    setIsShow(false)
    dispatch(open())
  }

  return (
    <div className={styled.container}>
      <div className={styled.create}>
        <div onClick={() => setIsShow(prevState => !prevState)}>
          <div>
            <svg width="36" height="36" viewBox="0 0 36 36">
              <path fill="#34A853" d="M16 16v14h4V20z"></path>
              <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
              <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
              <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
              <path fill="none" d="M0 0h36v36H0z"></path>
            </svg>
          </div>
          <span>Create</span>
          <FaCaretDown />
        </div>
        <ul className={isShow ? '' : styled.none}>
          <li onClick={openModal}>Event</li>
          <li>Task</li>
          <li>Appointment schedule</li>
        </ul>
      </div>

      <div className={styled.wrapper}>
        <Calendar />
        <div className={styled.search}>
          <input type="email" placeholder="Search for people" />
        </div>
      </div>

      <div className={styled.option}>
        <span>My Calendars</span>
        <span>
          <FaChevronDown />
        </span>
      </div>

      <div className={styled.option}>
        <span>Other Calendars</span>
        <span>
          <span>
            <FaPlus />
          </span>
          <span>
            <FaChevronDown />
          </span>
        </span>
      </div>

      <div className={styled.footer}>
        <a href="https://www.google.com/intl/en/policies/terms/">Terms</a> -{' '}
        <a href="https://policies.google.com/privacy?hl=en">Privacy</a>
      </div>
    </div>
  )
}

export default Leftbar
