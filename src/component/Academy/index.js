import { Link } from 'react-router-dom'
import FooterSection from '../FooterSection'
import {
  FaGraduationCap,
  FaAward,
  FaProjectDiagram,
  FaUserTie,
  FaDesktop,
  FaBullseye,
  FaSearch,
  FaShareAlt,
  FaCode,
  FaChartBar,
  FaShoppingCart,
  FaRobot,
  FaBookOpen,
  FaBolt,
  FaUsers,
  FaMedal,
  FaArrowRight,
} from 'react-icons/fa'
import Header from '../Header'
import './index.css'

const Academy = () => {
  return (
    <>
      <Header />
      <div className="academy-page">
        {/* HERO SECTION */}
        <section className="academy-hero">
          <span className="hero-tag">— GT APEX ACADEMY</span>
          <h2 className="hero-title">
            LEARN. <span className="highlight-green">EXECUTE.</span> GROW.
          </h2>
          <p className="hero-subtitle">
            Practical, industry-driven courses designed to turn beginners into performance marketers. Built by practitioners, not theorists.
          </p>

          <div className="hero-actions">
            <Link to="/courses" className="btn-primary">
              Explore Courses <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn-outline">
              Talk to Us
            </Link>
          </div>

          {/* STATS COUNTER BAR */}
          <div className="stats-container">
            <div className="stat-card">
              <FaGraduationCap className="stat-icon" />
              <div>
                <h3>500+</h3>
                <p>Students Trained</p>
              </div>
            </div>
            <div className="stat-card">
              <FaAward className="stat-icon" />
              <div>
                <h3>95%</h3>
                <p>Placement Support</p>
              </div>
            </div>
            <div className="stat-card">
              <FaProjectDiagram className="stat-icon" />
              <div>
                <h3>12+</h3>
                <p>Live Projects</p>
              </div>
            </div>
            <div className="stat-card">
              <FaUserTie className="stat-icon" />
              <div>
                <h3>1:1</h3>
                <p>Mentorship</p>
              </div>
            </div>
          </div>
        </section>
        

        {/* COURSES WE PROVIDE */}
        <section className="courses-section">
          <span className="section-tag">— OUR COURSES</span>
          <h2 className="section-title">Courses We <span className="highlight-green">Provide</span></h2>

          <div className="courses-grid">
            <div className="course-card">
              <FaDesktop className="course-icon" />
              <h3>Digital Marketing Fundamentals</h3>
              <span className="course-duration">6 Weeks</span>
            </div>

            <div className="course-card">
              <FaBullseye className="course-icon" />
              <h3>Performance Marketing & Paid Ads</h3>
              <span className="course-duration">8 Weeks</span>
            </div>

            <div className="course-card">
              <FaSearch className="course-icon" />
              <h3>SEO Mastery (On-page & Off-page)</h3>
              <span className="course-duration">6 Weeks</span>
            </div>

            <div className="course-card">
              <FaShareAlt className="course-icon" />
              <h3>Social Media Marketing & Content Strategy</h3>
              <span className="course-duration">6 Weeks</span>
            </div>

            <div className="course-card">
              <FaCode className="course-icon" />
              <h3>Website Design & Development Basics</h3>
              <span className="course-duration">6 Weeks</span>
            </div>

            <div className="course-card">
              <FaChartBar className="course-icon" />
              <h3>Data Analytics for Marketers</h3>
              <span className="course-duration">6 Weeks</span>
            </div>

            <div className="course-card">
              <FaShoppingCart className="course-icon" />
              <h3>Ecommerce & Growth Engines</h3>
              <span className="course-duration">6 Weeks</span>
            </div>

            <div className="course-card">
              <FaRobot className="course-icon" />
              <h3>AI Tools for Marketers</h3>
              <span className="course-duration">4 Weeks</span>
            </div>
          </div>

          <div className="center-action">
            <Link to="/courses" className="btn-outline">
              View All Courses <FaArrowRight />
            </Link>
          </div>
        </section>

        {/* WHY LEARN WITH GT APEX */}
        <section className="why-section">
          <span className="section-tag">— WHY LEARN WITH GT APEX?</span>
          
          <div className="why-grid">
            <div className="why-card">
              <FaBookOpen className="why-icon" />
              <h4>Built by Practitioners</h4>
              <p>Learn directly from experts and top marketers who run real campaigns – not theorists with slides.</p>
            </div>

            <div className="why-card">
              <FaBolt className="why-icon" />
              <h4>Live Campaign Access</h4>
              <p>Work on real, live projects and campaigns with real ad spends – real insights and outcomes.</p>
            </div>

            <div className="why-card">
              <FaUsers className="why-icon" />
              <h4>Community & Network</h4>
              <p>Join a network of driven marketers. Your batch is your network for life.</p>
            </div>

            <div className="why-card">
              <FaMedal className="why-icon" />
              <h4>Placement Support</h4>
              <p>Resume review, mock interviews, and job support till you get placed in top agencies & brands.</p>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION BANNER */}
        <section className="cta-banner">
          <div className="cta-content">
            <div className="cta-text-group">
              <div className="rocket-circle">
                <FaBolt />
              </div>
              <div>
                <h3>Your Digital Marketing Career <span className="highlight-green">Starts Here.</span></h3>
                <p>Learn. Execute. Grow with GT Apex Academy.</p>
              </div>
            </div>
            <Link to="/register" className="btn-primary">
              Join GT Apex Academy <FaArrowRight />
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <FooterSection />
        
      </div>
    </>
  )
}

export default Academy;