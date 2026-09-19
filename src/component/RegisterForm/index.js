import "./index.css";
import { useRef, useState } from "react";

const RegisterForm = ({ onSuccess }) => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const sendData = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError("");

    const formData = new FormData(form.current);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxjx0Dr-XOyXVSDq1wP59gKWM-G5UHwa8CyCb0FbYe30Gn-KVh0ApU3HSQFuYfJ5AClBA/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      form.current?.reset();

      setSubmitted(true);

      if (onSuccess) {
        onSuccess();
      }

    } catch (error) {
      console.error("Form submission error:", error);

      setError(
        "Something went wrong. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="success-message">

        <div className="success-icon">
          ✓
        </div>

        <h2>
          THANK YOU!
        </h2>

        <p>
          Your request has been submitted successfully.
          Our team will review your details and get in
          touch with you shortly.
        </p>

      </div>
    );
  }

  return (
    <form
      ref={form}
      onSubmit={sendData}
      className="register-form"
    >

      {/* NAME */}
      <div className="input-group">

        <label>
          Name
        </label>

        <input
          type="text"
          name="name"
          placeholder="Enter Full Name"
          required
        />

      </div>

      {/* EMAIL */}
      <div className="input-group">

        <label>
          Email Address
        </label>

        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          pattern="[a-zA-Z0-9._%+-]+@gmail\.com"
          title="Please enter a valid Gmail address ending with @gmail.com"
          required
        />

      </div>

      {/* MOBILE */}
      <div className="input-group">

        <label>
          Mobile Number
        </label>

        <input
          type="tel"
          name="mobile"
          placeholder="Enter 10-digit Mobile Number"

          inputMode="numeric"

          pattern="[0-9]{10}"

          minLength={10}
          maxLength={10}

          onInput={(e) => {
            e.target.value = e.target.value
              .replace(/\D/g, "")
              .slice(0, 10);
          }}

          title="Please enter exactly 10 digits"

          required
        />

      </div>

      {/* SERVICE */}
      <div className="input-group">

        <label>
          Service Required
        </label>

        <select
          name="service"
          defaultValue=""
          required
        >

          <option
            value=""
            disabled
          >
            Select Service
          </option>

          <option value="Social Media Marketing">
            Social Media Marketing
          </option>

          <option value="SEO">
            SEO
          </option>

          <option value="Google & Meta Ads">
            Google & Meta Ads
          </option>

          <option value="Website Development">
            Website Development
          </option>

          <option value="Branding & Design">
            Branding & Design
          </option>

          <option value="Lead Generation">
            Lead Generation
          </option>

        </select>

      </div>

      {/* DESCRIPTION */}
      <div className="input-group">

        <label>
          Description
        </label>

        <textarea
          name="message"
          placeholder="Describe Your Requirement"
          required
        />

      </div>

      {/* ERROR */}
      {error && (
        <p className="form-error">
          {error}
        </p>
      )}

      {/* BUTTON */}
      <button
        className="submit-btn"
        type="submit"
        disabled={loading}
      >

        {loading
          ? "SUBMITTING..."
          : "REGISTER NOW"}

      </button>

    </form>
  );
};

export default RegisterForm;