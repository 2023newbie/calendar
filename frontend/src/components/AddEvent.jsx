import { useDispatch } from 'react-redux'
import styled from './AddEvent.module.css'
import {
  FaTimes,
  FaEquals,
  FaRegClock,
  FaUsers,
  FaSearchLocation,
  FaBars,
  FaCalendarDay,
} from 'react-icons/fa'
import { close } from '../store/modal'

const AddEvent = () => {
  const dispatch = useDispatch()

  return (
    <div className={styled.container}>
      <div className={styled.card}>
        <div className={styled.closeBar}>
          <FaEquals />
          <span className={styled.close} onClick={() => dispatch(close())}>
            <FaTimes />
          </span>
        </div>

        <div className={styled.main}>
          <div className={styled.row}>
            <div className={styled.icon}></div>
            <div className={`${styled.info}`}>
              <input
                className={`${styled.input} ${styled.title}`}
                type="text"
                placeholder="Add title"
              />
            </div>
          </div>

          <div className={styled.row}>
            <div className={styled.icon}></div>
            <div className={styled.info}>
              <button
                className={`${styled.btn} ${styled.blue} ${styled.bcBlue} ${styled.bold}`}
              >
                Event
              </button>
              <button className={`${styled.btn} ${styled.gray} ${styled.bold}`}>
                Task
              </button>
              <button className={`${styled.btn} ${styled.gray} ${styled.bold}`}>
                Appointment schedule
              </button>
            </div>
          </div>

          <div className={styled.row}>
            <div className={styled.icon}>
              <FaRegClock />
            </div>
            <div
              className={`${styled.info} ${styled['date-time']} ${styled.gray}`}
            >
              <div className={styled.hour}>
                <span>Monday, December 4</span> <span>2:00pm - 3:00pm</span>
              </div>
              <div className={styled.other}>
                <span>Time zone</span>&#7036;<span>Does not repeat</span>
              </div>
            </div>
          </div>

          <div className={styled.row}>
            <div className={styled.icon}></div>
            <div className={styled.info}>
              <button
                className={`${styled.btn} ${styled.blue} ${styled.bold} ${styled['ml-1']}`}
              >
                Find a time
              </button>
            </div>
          </div>

          <div className={styled.row}>
            <div className={styled.icon}>
              <FaUsers />
            </div>
            <div
              className={`${styled.info} ${styled.addGuests} ${styled.gray} ${styled['ml-1']}`}
            >
              <input
                className={`${styled.input} ${styled.guestInput}`}
                type="text"
                placeholder="Add guests"
              />
            </div>
          </div>

          <div className={styled.row}>
            <div className={styled.icon}>
              <FaSearchLocation />
            </div>
            <div
              className={`${styled.info} ${styled.addGuests} ${styled.gray} ${styled['ml-1']}`}
            >
              <input
                type="text"
                placeholder="Add location"
                className={`${styled.input} ${styled.guestInput}`}
              />
            </div>
          </div>

          <div className={styled.row}>
            <div className={styled.icon}>
              <FaBars />
            </div>
            <div 
              className={`${styled.info} ${styled.addGuests} ${styled.gray} ${styled['ml-1']}`}
            >
              <input
                type="text"
                placeholder="Add description or attachments"
                className={`${styled.input} ${styled.guestInput}`}
              />
              </div>
          </div>

          <div className={styled.row}>
            <div className={styled.icon}>
              <FaCalendarDay />
            </div>
            <div className={styled.info}>
              <div>
                <span>Vu Duc</span> <span></span>
              </div>
              <div>
                <span>Busy</span>&#7036;<span>Default visibility</span>&#7036;
                <span>Notify 30 minutes before</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styled.footer}>
          <button className={`${styled.btn} ${styled.options}`}>More options</button>
          <button className={`${styled.btn} ${styled.save}`}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default AddEvent
