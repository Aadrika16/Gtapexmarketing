import React from 'react';
import './index.css';

const TrustedByMarquee = () => {
  // Row 1 logos - scrolls left
  const row1Logos = [
    { src: '/logos/csv.png', alt: 'YVSR Badminton Arena' },
    { src: '/logos/promarvel.png', alt: 'ProMarvel' },
    { src: '/logos/tfi.png', alt: 'TFI - Trend Fusion India' },
    { src: '/logos/mealmatch.png', alt: 'Meal Match' },
    { src: '/logos/sindhuparcel.png', alt: 'Sindhu Parcel'},
    { src: '/logos/anvika.png', alt: 'Anvika'},
    { src: '/logos/vg.png', alt: 'VG' }
  ];

  // Row 2 logos - scrolls right
  const row2Logos = [
    { src: '/logos/finedent.png', alt: 'FineDent Dental Clinics' },
    { src: '/logos/laverne.png', alt: 'Laverne Studio' },
    { src: '/logos/botanical.png', alt: 'Botanical Cafe & Bistro' },
    { src: '/logos/yvsr.png', alt: 'YVSR Badminton Arena' },
    { src: '/logos/laxmammasilks.png', alt: 'Laxmammasilks'},
    { src: '/logos/ortho.png', alt: 'Ortho Care'}
  ];

  const LogoStrip = ({ logos, direction = 'left' }) => {
    const animationStyle = direction === 'left'
      ? { animation: 'marqueeRightToLeft 18s linear infinite' }
      : { animation: 'marqueeLeftToRight 18s linear infinite' };

    return (
    <div className={`marquee-row`}>
      <div className={`marquee-content`} style={animationStyle}>
        {/* First set */}
        {logos.map((logo, idx) => (
          <div key={`first-${idx}`} className="logo-wrapper">
            <img src={logo.src} alt={logo.alt} loading="lazy" />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, idx) => (
          <div key={`duplicate-${idx}`} className="logo-wrapper">
            <img src={logo.src} alt={logo.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
    );
  };

  return (
    <section className="trusted-by-section">
      <h2 className="section-title">Our Partners & Clients</h2>
      <p className="section-description">
        We work with industry-leading brands and innovative companies to deliver exceptional results and create lasting partnerships.
      </p>
      <LogoStrip logos={row1Logos} direction="left" />
      <LogoStrip logos={row2Logos} direction="right" />
    </section>
  );
};

export default TrustedByMarquee;