import './index.css'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

const RegisterForm = ({ onSuccess }) => {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const sendData = async (e) => {
    e.preventDefault()

    if (loading) return
    setLoading(true)

    const formData = new FormData(form.current)

    try {
      // Send data to EmailJS and Google Sheets simultaneously
      await Promise.all([
        // 1. EmailJS Request
        emailjs.sendForm(
          'service_9dqxsen',
          'template_zmhx5y8',
          form.current,
          'sKXIJKNzq2gkS2Mjd'
        ),
        
        // 2. Google Sheets Request
        fetch(
          'https://script.google.com/macros/s/AKfycbxjx0Dr-XOyXVSDq1wP59gKWM-G5UHwa8CyCb0FbYe30Gn-KVh0ApU3HSQFuYfJ5AClBA/exec',
          {
            method: 'POST',
            body: formData,
            mode: 'no-cors',
          }
        ),
      ])

      form.current?.reset()
      setSubmitted(true)

      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('Failed to send ❌')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="success-message">
        <div className="success-icon">✓</div>
        <h2>THANK YOU!</h2>
        <p>
          Your request has been submitted successfully. 
          Our team will review your details and get in 
          touch with you shortly.
        </p>
      </div>
    )
  }

  return (
    <form ref={form} onSubmit={sendData} className="register-form">
      {/* NAME */}
      <div className="input-group">
        <label>Name</label>
        <input type="text" name="name" placeholder="Enter Full Name" required />
      </div>

      {/* EMAIL */}
      <div className="input-group">
        <label>Email Address</label>
        <input type="email" name="email" placeholder="Enter Email" required />
      </div>

      {/* MOBILE */}
      <div className="input-group">
        <label>Mobile Number</label>
        <input type="text" name="mobile" placeholder="Enter Mobile Number" required />
      </div>

      {/* SERVICE (DROP-DOWN) */}
      <div className="input-group">
        <label>Service Required</label>
        <select name="service" defaultValue="" required>
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
        <textarea name="message" placeholder="Describe Your Requirement" required />
      </div>

      {/* SUBMIT BUTTON */}
      <button className="submit-btn" type="submit" disabled={loading}>
        {loading ? 'SUBMITTING...' : 'REGISTER NOW'}
      </button>
    </form>
  )
}

export default RegisterForm