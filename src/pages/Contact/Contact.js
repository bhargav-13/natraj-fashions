import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    service: 'Personal Shopping Call'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      const formspreeFormId = process.env.REACT_APP_FORMSPREE_FORM_ID || 'YOUR_FORMSPREE_ID';
      const endpoint = `https://formspree.io/f/${formspreeFormId}`;

      // Build FormData for Formspree
      const fd = new FormData();
      fd.append('name', formData.name);
      fd.append('email', formData.email);
      fd.append('subject', formData.subject);
      fd.append('message', formData.message);
      fd.append('phone', formData.phone);
      fd.append('preferredDate', formData.preferredDate);
      fd.append('preferredTime', formData.preferredTime);
      fd.append('service', formData.service);
      // Optional: set the email subject for Formspree dashboards
      fd.append('_subject', `New ${formData.service} - ${formData.subject}`);
      // Optional: redirect disabled since this is AJAX
      fd.append('_replyto', formData.email);

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: fd
      });

      if (res.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          phone: '',
          preferredDate: '',
          preferredTime: '',
          service: 'Personal Shopping Call'
        });
      } else {
        const data = await res.json().catch(() => ({}));
        const msg = data?.errors?.map((e) => e.message).join(', ') || 'Something went wrong. Please try again later.';
        throw new Error(msg);
      }
    } catch (err) {
      setSubmitError(err.message || 'Submission failed. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: "123 Fashion Street, Style City, SC 12345"
    },
    {
      icon: "📧",
      title: "Email",
      details: "info@natraajfashion.com"
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+1 (555) 123-4567"
    },
    {
      icon: "🕒",
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM"
    }
  ];

  return (
    <div className="contact-page">
      <div className="container">
        {/* Header */}
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              {/* Honeypot field for spam protection */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} onChange={() => {}} />

              {/* Service type - defaults to Personal Shopping Call */}
              <div className="form-group">
                <label htmlFor="service">Service</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange}>
                  <option value="Personal Shopping Call">Personal Shopping Call</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Order Support">Order Support</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Enter message subject"
                />
              </div>

              {/* Personal Shopping Call preferred date/time */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="preferredDate">Preferred Date</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="preferredTime">Preferred Time</label>
                  <input
                    type="time"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Submission feedback */}
              {submitSuccess && (
                <p className="form-success" role="status">Thank you! Your message has been sent.</p>
              )}
              {submitError && (
                <p className="form-error" role="alert">{submitError}</p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <h2>Contact Information</h2>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h3>{info.title}</h3>
                    <p>{info.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">📘</a>
                <a href="#" className="social-icon">📷</a>
                <a href="#" className="social-icon">🐦</a>
                <a href="#" className="social-icon">💼</a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <h2>Find Us</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <div className="map-icon">🗺️</div>
              <p>Interactive Map Coming Soon</p>
              <p>123 Fashion Street, Style City, SC 12345</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What are your shipping options?</h3>
              <p>We offer standard shipping (3-5 business days) and express shipping (1-2 business days). Free shipping on orders over $50.</p>
            </div>
            <div className="faq-item">
              <h3>What is your return policy?</h3>
              <p>We offer a 30-day return policy for all items in their original condition. Return shipping is free for defective items.</p>
            </div>
            <div className="faq-item">
              <h3>Do you ship internationally?</h3>
              <p>Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location.</p>
            </div>
            <div className="faq-item">
              <h3>How can I track my order?</h3>
              <p>Once your order ships, you'll receive a tracking number via email to monitor your package's journey.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
