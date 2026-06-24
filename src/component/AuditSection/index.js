
import './index.css'

const AuditSection = () => {
  return (
    <div className="audit-container">
      <div className="audit-content">
        <h2>READY TO ACCELERATE YOUR GROWTH?</h2>

        <p>
          Partner with a performance-first digital marketing agency that combines strategy, creativity, and data to help your business grow faster and smarter.
        </p>

        <div className="audit-form">
          <input
            type="email"
            className='input-box'
            placeholder="ENTER WORK EMAIL"
          />

          <button>BOOK A FREE STRATEGY CALL</button>
        </div>
      </div>

      <div className="audit-footer">
        <div className="footer-left">
          © 2026 GT APEX. ENGINEERED FOR PRECISION.
        </div>

        <div className="footer-right">
          <span>PRIVACY POLICY</span>
          <span>TERMS OF SERVICE</span>
          <span>CONTACT</span>
        </div>
      </div>
    </div>
  )
}

export default AuditSection
