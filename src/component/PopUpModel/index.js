import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import RegisterForm from "../RegisterForm";

import "./index.css";

const PopupModal = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">

      <div className="popup-container">

        {/* LEFT IMAGE */}
        <div className="popup-image-section">
          <img
            src="https://res.cloudinary.com/doyaebals/image/upload/v1778328086/WhatsApp_Image_2026-05-09_at_5.29.05_PM_gdkued.jpg"
            alt="popup"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="popup-form-section">

          <button
            className="close-btn"
            onClick={() => setShowPopup(false)}
          >
            <IoClose />
          </button>

          <h2 className="popup-title">
            Connect with Us!
          </h2>




          <p className="popup-subtitle">
            Register now and get a free consultation.
          </p>

          <div className="register-card">
            <RegisterForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default PopupModal;