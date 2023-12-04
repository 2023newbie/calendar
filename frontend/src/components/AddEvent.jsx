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

const AddEvent = () => {
  return (
    <div className={styled.container}>
      <div className={styled.card}>
        <div className={styled.closeBar}>
          <FaEquals />
          <span className={styled.close}><FaTimes /></span>
        </div>
        <div className={styled.main}>
          <div className={styled.row}>
            <div className={styled.icon}></div>
            <div className={styled.info}>
              <input type="text" placeholder="Add title" />
            </div>
          </div>

          <div className={styled.row}>
            <div className={styled.icon}></div>
            <div className={styled.info}>
              <button className={styled.btn}>Event</button>
              <button className={styled.btn}>Task</button>
              <button className={styled.btn}>Appointment schedule</button>
            </div>
          </div>

          <div className={styled.row}>
            <div className={styled.icon}>
              <FaRegClock />
            </div>
            <div className={styled.info}>
              <div>
                <span>Monday, December 4</span> <span>2:00pm - 3:00pm</span>
              </div>
              <div>
                <span>Time zone</span>&#7036;<span>Does not repeat</span>
              </div>
            </div>
          </div>

          <div className={styled.row}>
            <div className={styled.icon}></div>
            <div className={styled.info}>
              <button>Find a time</button>
            </div>
          </div>

          <div className={styled.row}>
            <div className={styled.icon}>
              <FaUsers />
            </div>
            <div className={styled.info}>Add guests</div>
          </div>

          <div className={styled.row}>
            <div className={styled.icon}></div>
            <div className={styled.info}>
              Add Google Meet video conferencing
            </div>
          </div>

          <div className={styled.row}>
            <div className={styled.icon}>
              <FaSearchLocation />
            </div>
            <div className={styled.info}>Add location</div>
          </div>

          <div className={styled.row}>
            <div className={styled.icon}><FaBars /></div>
            <div className={styled.info}>Add description or attachments</div>
          </div>

          <div className={styled.row}>
            <div className={styled.icon}><FaCalendarDay /></div>
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
      </div>
    </div>
  )
}

export default AddEvent
