import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  FaHome,
  FaServicestack,
  FaInfoCircle,
  FaBars,
  FaTimes,
  FaChevronDown
} from 'react-icons/fa'

import RegisterForm from '../RegisterForm'
import './index.css'

const Header = () => {
  const location = useLocation()

  const [open, setOpen] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)

  const toggleRegister = () => {
    setShowRegister(!showRegister)
    setOpen(false)
  }

  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/doyaebals/image/upload/v1777117610/82023ee6966f15c767c25263f523a655a0945cfe_bxiaan.png"
            alt="logo"
          />
        </div>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${open ? 'active' : ''}`}>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              <FaHome /> Home
            </Link>
          </li>

          <li
            className="services-dropdown"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <Link
              to="/services"
              className={location.pathname.includes('/services') ? 'active' : ''}
            >
              <FaServicestack />
              Services
              <FaChevronDown className="dropdown-icon" />
            </Link>

            <ul className={`dropdown-menu ${showServicesDropdown ? 'show-dropdown' : ''}`}>
              <li>
                <Link to="/services/digital-marketing">
                  DIGITAL MARKETING
                </Link>
              </li>

              <li>
                <Link to="/services/performance-marketing">
                  PERFORMANCE MARKETING
                </Link>
              </li>

              <li>
                <Link to="/services/web-design-development">
                  WEBSITE DESIGN & DEVELOPMENT
                </Link>
              </li>

              <li>
                <Link to="/services/social-media-marketing">
                  SOCIAL MEDIA MARKETING
                </Link>
              </li>

              <li>
                <Link to="/services/data-analytics">
                  DATA ANALYTICS
                </Link>
              </li>

              <li>
                <Link to="/services/ecommerce">
                  ECOMMERCE & GROWTH ENGINES
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
            >
              <FaInfoCircle /> About Us
            </Link>
          </li>

          <li>
            <button className="btn" onClick={toggleRegister}>
              REGISTER NOW
            </button>
          </li>
        </ul>
      </header>

      <div className={`register-modal ${showRegister ? 'show' : ''}`}>
        <div className="register-overlay" onClick={toggleRegister}></div>

        <div className="register-panel">
          <div className="register-top">
            <h2>Register Now</h2>

            <button
              className="close-btn"
              onClick={toggleRegister}
            >
              ✕
            </button>
          </div>

          <RegisterForm />
        </div>
      </div>
    </>
  )
}

export default Header