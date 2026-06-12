import React from 'react';
import { useHistory } from 'react-router-dom'
import './index.css';

const GTApexHero = () => {
  const history = useHistory();

  return (
    <main className="hero-main">
      <video 
        className="hero-video" 
        autoPlay loop muted playsInline 
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4" 
      />
      <div className="hero-overlay"></div>

      <div className="hero-content">
        {/* Left Section: Minimalist Glass Panel */}
        <section className="left-panel">
          <div className="glass-panel">
            <nav className="navbar">
              <div className="logo-box">
                <span>WELCOME TO  GT Apex<br /></span>
                
              </div>
            </nav>
            
            <div className="hero-text-area">
              <h5>MARKETING is here.   We are MARKETING. <br />We do MARKETING.<br/></h5>
                <div className = "btn-con">
                    <button className="explore-btn" onClick={() => history.push('/services')}>
                        Explore Services
                    </button>
                        <button className="explore-btn" onClick={() => history.push('/about')}>
                            About Us
                        </button>
                </div>
            </div>
          </div>
        </section>

        {/* Right Section: For your Visual/Globe */}
        <section className="right-panel">
          <div className="globe-visual">
            {/* Insert your globe or visual content here */}
          </div>
        </section>
      </div>
    </main>
  );
};

export default GTApexHero;