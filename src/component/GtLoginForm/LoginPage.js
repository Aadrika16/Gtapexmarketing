import React, { useState, useEffect } from "react";
import CarScene from "./CarScene";
import "./login.css";

export default function LoginPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleTrigger = () => {
      setVisible(true); 
    };

    window.addEventListener("showLogin", handleTrigger);
    return () => window.removeEventListener("showLogin", handleTrigger);
  }, []);

  return (
    <div className={`login-page ${visible ? "reveal" : "hidden-state"}`}>
      
      <div className="car-side">
        <div className="background-glow" />
        <CarScene />
      </div>

      <div className="form-side">
        <div className="login-card">
          <p className="welcome-text">WELCOME BACK</p>
          <h1>MUSTANG<span></span></h1>
          <p className="sub-text">Experience performance engineering. Log in to your driver control cockpit panel profile system details below.</p>
          
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          
          <div className="options-row">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#forgot">Forgot Password?</a>
          </div>

          <button type="submit">START ENGINE</button>
        </div>
      </div>

    </div>
  );
}