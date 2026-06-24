import {useHistory} from "react-router-dom";
import "./index.css";

const services = [
  {
    id: 1,
    slug: "social-media-management",
    title: "Social Media Management",
  },
  {
    id: 2,
    slug: "reels-video-production",
    title: "Reels & Video Production",
  },
  {
    id: 3,
    slug: "google-ads-management",
    title: "Google Ads Management",
  },
  {
    id: 4,
    slug: "email-marketing",
    title: "Email Marketing",
  },
  {
    id: 5,
    slug: "professional-photo-video-shoots",
    title: "Professional Photo & Video Shoots",
  },
  {
    id: 6,
    slug: "competitor-analysis",
    title: "Competitor Analysis",
  },
  {
    id: 7,
    slug: "content-strategy-planning",
    title: "Content Strategy & Planning",
  },
  {
    id: 8,
    slug: "copywriting-captions",
    title: "Copywriting & Captions",
  },
  {
    id: 9,
    slug: "influencer-marketing",
    title: "Influencer Marketing",
  },
  {
    id: 10,
    slug: "whatsapp-sms-marketing",
    title: "WhatsApp & SMS Marketing",
  },
  {
    id: 11,
    slug: "analytics-monthly-reporting",
    title: "Analytics & Monthly Reporting",
  },
  {
    id: 12,
    slug: "linkedin-management",
    title: "LinkedIn Management",
  },
  {
    id: 13,
    slug: "graphic-design-creatives",
    title: "Graphic Design & Creatives",
  },
  {
    id: 14,
    slug: "meta-ads-facebook-instagram",
    title: "Meta Ads (Facebook/Instagram)",
  },
  {
    id: 15,
    slug: "seo-on-page-off-page",
    title: "SEO (On-page & Off-page)",
  },
  {
    id: 16,
    slug: "brand-identity-strategy",
    title: "Brand Identity & Strategy",
  },
  {
    id: 17,
    slug: "event-occasion-marketing",
    title: "Event & Occasion Marketing",
  },
  {
    id: 18,
    slug: "website-design-management",
    title: "Website Design & Management",
  }
];

const ServicesCards = () => {
  const history = useHistory();
  const handleClick = (service) => {
    history.push(`/blogs/${service.slug}`);
  };

  return (
    <section className="services">
      <div className="services-header">
        <div>
          <p className="tag">— TECHNICAL CAPABILITIES</p>
          <h2>
            OUR FULL SUITE <br />
            <span>OF SERVICES</span>
          </h2>
        </div>

        <p className="desc">
          From ideation and content production to paid performance and influencer
          marketing — every deliverable is built for measurable results.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => handleClick(service)}
          >
            <div className="dot"></div>
            <p>{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCards
