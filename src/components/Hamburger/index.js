import { NavLink } from 'react-router-dom'
import Popup from 'reactjs-popup'
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseCircleSharp } from "react-icons/io5";
import './index.css'

const Hamburger = () => {
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <RiMenu3Line style={{ height: "18px", width: "18px" }} />
          </button>
        }
      >
        {close => (
          <div className='popup-content'>
            <ul className='nav-items-container-mobile'>
              <li>
                <NavLink to="/" className="link">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="link">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="link">
                  Contacts
                </NavLink>
              </li>
            </ul>
            <button
              type="button"
              className="close-button"
              onClick={() => close()}
            >
              <IoCloseCircleSharp style={{ height: "16px", width: "16px" }} />
            </button>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default Hamburger