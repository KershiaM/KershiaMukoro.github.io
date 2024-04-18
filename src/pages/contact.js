import styles from '../css/custom.css';

// src/pages/contact.js
import React, { useState } from 'react';
import Layout from '@theme/Layout';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
        // Add your Formspree form handling here
    const formData = new FormData(event.target);

    // POST data to Formspree
    const response = await fetch('https://formspree.io/f/mdoqyana', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      setSubmitted(true); // Set submitted to true to show the thank-you message
    } else {
      alert('There was an error. Please try again.'); // Handle errors here
    }
  };

  return (
    <Layout title="Contact Me">
      <div className="container margin-vert--lg">
        <div className="form-container">
          <h1>Contact Me</h1>
          {submitted ? (
            <div>
              <h2>Thank you for your submission!</h2>
              <p>We will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="_replyto" required />

              <label htmlFor="company">Company/Organization:</label>
              <input type="text" id="company" name="company" required />

              <label htmlFor="service">Service Inquiry:</label>
              <select id="service" name="service" required>
                <option value="">Select a Service</option>
                <option value="sop">Standard Operating Procedures (SOPs)</option>
                <option value="training">Training Materials</option>
                <option value="process">Process Documentation</option>
                <option value="api">API Documentation</option>
                 <option value="user_guide">User Guides</option>
                <option value="quick_start">Quick Start Guides</option>
                <option value="release">Release Notes</option>
                <option value="faq">Frequently Asked Questions (FAQs)</option>
                <option value="e_summary">Executive Summaries</option>
                <option value="other">Other (Please specify below.)</option>
              </select>

              <label htmlFor="message">Message/Additional Comments:</label>
              <textarea id="message" name="message"></textarea>

              <button type="submit" className="button">Submit</button>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
