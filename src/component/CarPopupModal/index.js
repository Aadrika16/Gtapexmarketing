import { useRef, useState } from "react";
import RegisterForm from "../RegisterForm";
import { IoClose } from "react-icons/io5";
import "./index.css";
import videoBg from "../../assets/racing-intro.mp4";

const LoginPage = ({onClose}) => {
  const videoRef = useRef(null);
  

  const [showPopup, setShowPopup] = useState(false);
  const handleVideoEnd = () => {
    setShowPopup(true);

    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Close whole modal and return home page
  const handleVideoClose = () => {
  console.log("Video close clicked");
  onClose(); // Call the onClose prop to close the modal
};
  // Close form and return to car video
  const handleFormClose = () => {
    setShowPopup(false);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <main className="login-overlay">
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {!showPopup && (
          <button
            type="button"
            className="close-modal-btn"
            onClick={handleVideoClose}
          >
            <IoClose size={30} />
          </button>
        )}

        <video
          ref={videoRef}
          className="modal-video"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        >
          <source src={videoBg} type="video/mp4" />
        </video>

        <div className="video-overlay" />

        {showPopup && (
          <div className="popup-content">
            <div className="login-card">
              <button
                type="button"
                className="form-close-btn"
                onClick={handleFormClose}
              >
                <IoClose size={22} />
              </button>

              <div className="logo-section">
                <div className="logo-circle">
                  <span>GT</span>
                </div>

                <p className="company-name">
                  APEX MARKETING
                </p>
              </div>

              <h1 className="login-title">
                Welcome Back
              </h1>

              <RegisterForm />

              
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default LoginPage;