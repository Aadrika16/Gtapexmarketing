import { useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
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
  const history = useHistory()

  const [open, setOpen] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)

  const isHomeActive = location.pathname === '/'
  const isAboutActive = location.pathname === '/about'
  const isServicesActive = location.pathname.startsWith('/services')

  const toggleRegister = () => {
    setShowRegister(prev => !prev)
    setOpen(false)
    setShowServicesDropdown(false)
  }

 const handleServicesClick = () => {
  if (window.innerWidth <= 768) {
    if (!showServicesDropdown) {
      setShowServicesDropdown(true)
    } else {
      closeMobileMenu()
      history.push('/services')
    }
  } else {
    history.push('/services')
  }
}
  const closeMobileMenu = () => {
    setOpen(false)
    setShowServicesDropdown(false)
  }

  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/doyaebals/image/upload/v1777117610/82023ee6966f15c767c25263f523a655a0945cfe_bxiaan.png"
            alt="GT Apex Logo"
          />
        </div>

        <div className="hamburger" onClick={() => setOpen(prev => !prev)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${open ? 'active' : ''}`}>
          <li>
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={isHomeActive ? 'active' : ''}
            >
              <FaHome />
              Home
            </Link>
          </li>

          <li
            className="services-dropdown"
            onMouseEnter={() => {
              if (window.innerWidth > 768) {
                setShowServicesDropdown(true)
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 768) {
                setShowServicesDropdown(false)
              }
            }}
          >
            <button
              type="button"
              className={`services-link ${isServicesActive ? 'active' : ''}`}
              onClick={handleServicesClick}
            >
              <FaServicestack />
              Services
              <FaChevronDown
                className={`dropdown-icon ${
                  showServicesDropdown ? 'rotate' : ''
                }`}
              />
            </button>

            <ul
              className={`dropdown-menu ${
                showServicesDropdown ? 'show-dropdown' : ''
              }`}
            >
              <li>
                <Link to="/services/digital-marketing" onClick={closeMobileMenu}>
                  Digital Marketing
                </Link>
              </li>

              <li>
                <Link to="/services/performance-marketing" onClick={closeMobileMenu}>
                  Performance Marketing
                </Link>
              </li>

              <li>
                <Link to="/services/web-design-development" onClick={closeMobileMenu}>
                  Website Design & Development
                </Link>
              </li>

              <li>
                <Link to="/services/social-media-marketing" onClick={closeMobileMenu}>
                  Social Media Marketing
                </Link>
              </li>

              <li>
                <Link to="/services/data-analytics" onClick={closeMobileMenu}>
                  Data Analytics
                </Link>
              </li>

              <li>
                <Link to="/services/ecommerce" onClick={closeMobileMenu}>
                  Ecommerce & Growth Engines
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className={isAboutActive ? 'active' : ''}
            >
              <FaInfoCircle />
              About Us
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

            <button className="close-btn" onClick={toggleRegister}>
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