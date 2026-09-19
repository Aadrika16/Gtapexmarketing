import "./index.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const RegisterForm = ({ onSuccess }) => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const sendData = async (e) => {
    e.preventDefault();

    if (loading) return;

    // PREVENT SUBMISSION IF ANY FIELD IS INVALID OR EMPTY
    if (!form.current.checkValidity()) {
      form.current.reportValidity();
      return;
    }

    setLoading(true);
    setError("");

    const formData = new FormData(form.current);

    try {
      await Promise.all([
        // EMAILJS
        emailjs.sendForm(
          "service_ydhyzjh",
          "template_fojslo8",
          form.current,
          "L86MzcW009xkQjp0M"
        ),

        // GOOGLE SHEETS
        fetch(
          "https://script.google.com/macros/s/AKfycbxjx0Dr-XOyXVSDq1wP59gKWM-G5UHwa8CyCb0FbYe30Gn-KVh0ApU3HSQFuYfJ5AClBA/exec",
          {
            method: "POST",
            body: formData,
            mode: "no-cors",
          }
        ),
      ]);

      form.current?.reset();
      setSubmitted(true);

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError(
        "Something went wrong while submitting your request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="success-message">
        <div className="success-icon">✓</div>
        <h2>THANK YOU!</h2>
        <p>
          Your request has been submitted successfully.
          Our team will review your details and get in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <form ref={form} onSubmit={sendData} className="register-form" noValidate>
      {/* NAME */}
      <div className="input-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Full Name"
          required
          onInvalid={(e) => {
            if (e.target.validity.valueMissing) {
              e.target.setCustomValidity("Please enter your full name.");
            }
          }}
          onInput={(e) => {
            e.target.setCustomValidity("");
          }}
        />
      </div>

      {/* EMAIL */}
      <div className="input-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          required
          onInvalid={(e) => {
            if (e.target.validity.valueMissing) {
              e.target.setCustomValidity("Please enter your email address.");
            } else if (e.target.validity.typeMismatch) {
              e.target.setCustomValidity(
                "Please enter a valid email address (e.g., name@gmail.com)."
              );
            }
          }}
          onInput={(e) => {
            e.target.setCustomValidity("");
          }}
        />
      </div>

      {/* MOBILE */}
      <div className="input-group">
        <label>Mobile Number</label>
        <input
          type="tel"
          name="mobile"
          placeholder="Enter 10-digit Mobile Number"
          inputMode="numeric"
          pattern="[0-9]{10}"
          maxLength={10}
          required
          onInput={(e) => {
            // Strip out any non-numeric characters instantly (blocks alphabets & symbols)
            e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
            e.target.setCustomValidity("");
          }}
          onInvalid={(e) => {
            if (e.target.validity.valueMissing) {
              e.target.setCustomValidity("Please enter your mobile number.");
            } else {
              e.target.setCustomValidity(
                "Mobile number must be exactly 10 digits and contain only numbers."
              );
            }
          }}
        />
      </div>

      {/* SERVICE */}
      <div className="input-group">
        <label>Service Required</label>
        <select
          name="service"
          defaultValue=""
          required
          onInvalid={(e) => {
            e.target.setCustomValidity("Please select a service.");
          }}
          onChange={(e) => {
            e.target.setCustomValidity("");
          }}
        >
          <option value="" disabled>
            Select Service
          </option>
          <option value="Social Media Marketing">Social Media Marketing</option>
          <option value="SEO">SEO</option>
          <option value="Google & Meta Ads">Google & Meta Ads</option>
          <option value="Website Development">Website Development</option>
          <option value="Branding & Design">Branding & Design</option>
          <option value="Lead Generation">Lead Generation</option>
        </select>
      </div>

      {/* DESCRIPTION */}
      <div className="input-group">
        <label>Description</label>
        <textarea
          name="message"
          placeholder="Describe Your Requirement"
          required
          onInvalid={(e) => {
            if (e.target.validity.valueMissing) {
              e.target.setCustomValidity("Please describe your requirement.");
            }
          }}
          onInput={(e) => {
            e.target.setCustomValidity("");
          }}
        />
      </div>

      {/* ERROR MESSAGE */}
      {error && <p className="form-error">{error}</p>}

      {/* BUTTON */}
      <button className="submit-btn" type="submit" disabled={loading}>
        {loading ? "SUBMITTING..." : "REGISTER NOW"}
      </button>
    </form>
  );
};

export default RegisterForm;