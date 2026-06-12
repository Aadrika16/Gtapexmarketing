import { useState } from "react";
import "./index.css";

const GtApexWhatsapp = () => {
  const [open, setOpen] = useState(false);

  const phoneNumber = "918247805403";

  const whatsappIcon =
    "https://res.cloudinary.com/doyaebals/image/upload/v1780401322/ChatGPT_Image_Jun_2_2026_05_25_08_PM_kfro5r.png";

  const message =
    "Hello GTApex Team, I would like to know more about your services.";

  const handleWhatsapp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="gtapex-chat-wrapper">
      {open && (
        <div className="gtapex-chat-box">
          <div className="gtapex-header">
            <h3>GTApex Marketing</h3>
            <p>Usually replies within minutes</p>
          </div>
          <button
            className="close-btn"
            onClick={() => setOpen(false)}
          >
            ✕
            </button>

          <div className="gtapex-message">
            <span>
              👋 Hello there!
              <br />
              Welcome to GTApex Marketing.
              <br />
              How can we help grow your business today?
            </span>
          </div>

          <button
            className="gtapex-whatsapp-btn"
            onClick={handleWhatsapp}
          >
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              className="btn-icon"
            />
            Chat on WhatsApp
          </button>
        </div>
      )}

      <button
        className="floating-whatsapp"
        onClick={() => setOpen(!open)}
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="floating-icon"
        />
      </button>
    </div>
  );
};

export default GtApexWhatsapp;