import AuditSection from "../AuditSection"
import Header from "../Header"
import './index.css'

const Services = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <Header />
      <section className="hero-section">
        <div className="hero-left">
          <span className="status-badge">HYDERABAD'S PERFORMANCE-FIRST DIGITAL AGENCY</span>

          <h2>
            DIGITAL STRATEGIES<br />
            <span>THAT DELIVER ROI</span>
          </h2>

          <p>
            GT Apex Marketing is a full-service digital marketing agency in Hyderabad helping brands grow through SEO, social media marketing, Google Ads, branding, content creation, and web development. We combine creativity with data to build campaigns that generate real business results.

          </p>

          <div className="stats-boxes">
            <div className="stat-card">
              <h3>360°</h3>
              <span> DIGITAL MARKETING SERVICES</span>
            </div>

            <div className="stat-card">
              <h3>100<span className="ms-span">%</span></h3>
              <span>DEPLOYMENT LATENCY</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src="https://res.cloudinary.com/doyaebals/image/upload/v1777372853/d4fa41f4964b2b13874bf51abbfd4e1641b01161_auegku.png" alt="service"/>
        </div>
      </section>

      {/* Modules Section */}
      <section className="modules-section">
        <span className="section-label">SERVICE ARCHITECTURE</span>
        <h2>PERFORMANCE ENGINEERING MODULES</h2>

        <div className="module-grid">
          <div className="module-card large-card">
            <small>MODULE 01</small>
            <h3>DIGITAL MARKETING</h3>
            <p>
              Build a brand that stands out and scales.<br />

              Strategic Positioning & Brand Narrative <br />
              Visual Identity Systems (Logo, Colors, Design Language)<br />
              Market Research & Customer Personas <br />
              Competitive Benchmarking & Differentiation
            </p>

            <div className="bottom-info">
              <div>
                <span>KP FOCUS</span>
                <h4>Brand Velocity</h4>
              </div>

              <div>
                <span>PRIMARY TOOL</span>
                <h4>Apex Insights™</h4>
              </div>
            </div>
          </div>

          <div className="module-card performance-card">
            <small>MODULE 02</small>
            <h3>PERFORMANCE MARKETING</h3>
            <p>
              Data-driven campaigns focused on ROI, not vanity metrics.
            </p>

            <div className="chart-bars">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="module-card module-card1">
            <small>MODULE 03</small>
            <h3>WEBSITE DESIGN & DEVELOPMENT</h3>
            <p>
              (UI/UX FOCUSED)
            </p>

            <ul>
              <li>HIGH-CONVERTING LANDING PAGE</li>
              <li>E-COMMERCE STORE SETUP & OPTIMIZATION</li>
              <li>CRM INTEGRATION & AUTOMATION SYSTEMS</li>
            </ul>
          </div>

          <div className="module-card">
            <small>MODULE 04</small>
            <h3>SOCIAL MEDIA MARKETING</h3>
            <ul>
              <li className="social-media-list">TURN ATTENTION INTO ENGAGEMENT AND ENGAGEMENT INTO REVENUE</li>
              <li className="social-media-list">END-TO-END SOCIAL MEDIA MANAGEMENT</li>
              <li className="social-media-list">PAID SOCIAL CAMPAIGNS(META,LINKEDIN)</li>
              <li className="social-media-list">INFLUENCER & CREATOR COLLABORATIONS</li>
              <li className="social-media-list">COMMUNITY BUILDING & ENGAGEMENT STRATEGY</li>
            </ul>

          </div>

          <div className="module-card green-card">
            <small>MODULE 05</small>
            <h3>DATA ANALYTICS</h3>
            <ul>
              <li>CLARITY THROUGH DATA. DECISIONS BACKED BY INSIGHTS.</li>
              <li>ADVANCED ANALYTICS & PERFORMANCE REPORTING</li>
              <li>ONLINE REPUTATION MANAGEMENT(ORM)</li>
              <li>MARKETING ATTRIBUTION MODELING</li>
              <li>PR CAMPAIGNS</li>
            </ul>
            <div className="progress-line"></div>
          </div>
        </div>

        <div className="bottom-section">
          <div className="bottom-left">
            <small>MODULE 06</small>
            <h4>ECOMMERCE <br /> GROWTH ENGINES</h4>
            <p>
              Turn-key commerce frameworks designed for rapid scaling.
            </p>

            <button>REQUEST SPECS</button>
          </div>

          <div className="bottom-right">
            <img src="https://res.cloudinary.com/doyaebals/image/upload/v1777381150/Heading_3_1_z020wv.svg" alt="doyaebals" className="image"/>
          </div>
        </div>
      </section>
      <AuditSection />
    </div>
  )
}

export default Services
