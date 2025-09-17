import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const handleVideoCallAppointmentSubmit = (event) => {
    event.preventDefault();
    setIsSuccessOpen(true);
  };

  const closeSuccessModal = () => setIsSuccessOpen(false);

  return (
    <div className="home">
      {/* Hero Section - NATRAJ FASHIONS Style */}
      <section className="hero">
        <div className="hero-content">
          <div className="brand-logo">
            <img src="/public/NAT%20Logo%201.jpg" alt="Natraj Fashions logo" className="brand-logo-img" />
          </div>
          
          <div className="hero-text">
            <h1 className="main-headline">
              <span className="headline-line">Tiny Trends,</span>
              <span className="headline-line">Crafted with Love</span>
              <span className="headline-line">& Care</span>
            </h1>
            <p className="hero-description">
              Sustainable, stylish, and oh-so-soft clothing for your little one's everyday adventures
            </p>
            <a href="#contact-us" className="cta-button">
              Join us
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-container">
            
            <img 
              src="/public/Group%201.jpg" 
              alt="Happy children in fashion" 
              className="children-image"
            />
            
          </div>
        </div>
      </section>

      {/* Categories Section (Girls/Boys) */}
      <section className="categories" id="features">
        <div className="container">
          <h2 className="categories-title">Features That Matter</h2>
          <div className="category-grid">
            <div className="category-card category-girls" style={{ backgroundImage: "url('/public/collection-1%201.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
              <div className="category-inner">
                <span className="category-title">Girls</span>
                <span className="category-subtitle">Clothing</span>
              </div>
            </div>
            <div className="category-card category-boys" style={{ backgroundImage: "url('/public/collection-3%201.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
              <div className="category-inner">
                <span className="category-title">Boys</span>
                <span className="category-subtitle">Clothing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-image">
            <div className="about-circular-accent" aria-hidden="true"></div>
            <img 
              src="/public/Group%201%20(2).jpg" 
              alt="Children enjoying fashion" 
              className="about-children-image"
            />
          </div>
          <div className="about-text">
            <h2 className="about-headline">
              <span className="headline-line">Made for Little Ones,</span>
              <span className="headline-line">Loved by Parents</span>
            </h2>
            <p className="about-description">
              At Natraj Fashion, we believe childhood should be full of comfort, colors, and endless adventures. That's why we create clothing and accessories that are soft on skin, safe for kids, and stylish enough to make every moment picture-perfect. From playful everyday wear to cozy essentials, our collection is designed to keep up with your child's imagination and energy.
            </p>
          </div>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="shop-categories" id="category">
        <div className="container">
          <h2 className="categories-main-title">Shop by Category</h2>
          <div className="categories-grid">
            <div className="category-item">
              <div className="category-image-container">
                <img src="/public/2%201.jpg" alt="New Born" className="category-img-full" />
              </div>
              <span className="category-label">New Born</span>
            </div>
            
            <div className="category-item">
              <div className="category-image-container">
                <img src="/public/2%202.jpg" alt="Girl" className="category-img-full" />
              </div>
              <span className="category-label">Girl</span>
            </div>
            
            <div className="category-item">
              <div className="category-image-container">
                <img src="/public/2%203.jpg" alt="Boy" className="category-img-full" />
              </div>
              <span className="category-label">Boy</span>
            </div>
            
            <div className="category-item">
              <div className="category-image-container">
                <img src="/public/3%201.jpg" alt="On the Go" className="category-img-full" />
              </div>
              <span className="category-label">On the Go</span>
            </div>
            
            <div className="category-item">
              <div className="category-image-container">
                <img src="/public/3%203.jpg" alt="Gifting Ideas" className="category-img-full" />
              </div>
              <span className="category-label">Gifting Ideas</span>
            </div>
            
            <div className="category-item">
              <div className="category-image-container">
                <img src="/public/1%201.jpg" alt="Clothing" className="category-img-full" />
              </div>
              <span className="category-label">Clothing</span>
            </div>
            
            <div className="category-item">
              <div className="category-image-container">
                <img src="/public/1%202.jpg" alt="Poppy Time" className="category-img-full" />
              </div>
              <span className="category-label">Poppy Time</span>
            </div>
            
            <div className="category-item">
              <div className="category-image-container">
                <img src="/public/1%203.png" alt="Bath" className="category-img-full" />
              </div>
              <span className="category-label">Bath</span>
            </div>
            
            <div className="category-item">
              <div className="category-image-container">
                <img src="/public/1%204.jpg" alt="Sleep" className="category-img-full" />
              </div>
              <span className="category-label">Sleep</span>
            </div>
            
            <div className="category-item">
              <div className="category-image-container">
                <img src="/public/3%202.jpg" alt="Toys" className="category-img-full" />
              </div>
              <span className="category-label">Toys</span>
            </div>
          </div>
          
          <div className="contact-us-container">
            <a href="#contact-us" className="contact-us-btn">
              Contact us
            </a>
          </div>
        </div>
      </section>

      {/* Our Promise of Care Section */}
      <section className="promise-section" id="promise">
        <div className="container">
          <h2 className="promise-title">Our Promise of Care</h2>
          <div className="promise-cards">
            <div className="promise-card">
              <div className="promise-icon">
                <img 
                  src="/public/file-icons_service-fabric.svg" 
                  alt="Service Fabric Icon" 
                  width="60" 
                  height="60"
                />
              </div>
              <h3 className="promise-card-title">Gentle, Skin-Safe Fabrics</h3>
            </div>
            
            <div className="promise-card">
              <div className="promise-icon">
                <img 
                  src="/public/hugeicons_sustainable-energy.svg" 
                  alt="Sustainable Energy Icon" 
                  width="60" 
                  height="60"
                />
              </div>
              <h3 className="promise-card-title">Sustainable Materials</h3>
            </div>
            
            <div className="promise-card">
              <div className="promise-icon">
                <img 
                  src="/public/cil_mood-very-good.svg" 
                  alt="Mood Very Good Icon" 
                  width="60" 
                  height="60"
                />
              </div>
              <h3 className="promise-card-title">Happy Little Ones</h3>
            </div>
            
            <div className="promise-card">
              <div className="promise-icon">
                <img 
                  src="/public/streamline-flex_production-belt-time.svg" 
                  alt="Production Belt Time Icon" 
                  width="60" 
                  height="60"
                />
              </div>
              <h3 className="promise-card-title">Thoughtful Craftsmanship</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section" id="subscribe">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="newsletter-headline">
              <span className="headline-line">Fresh Arrivals,</span>
              <span className="headline-line">Special Moments,</span>
              <span className="headline-line">Just for You</span>
            </h2>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section" id="products">
        <div className="container">
          <h2 className="products-title">Our Products</h2>
          <div className="products-grid">
            <div className="product-item">
              <div className="product-image-container">
                <img 
                  src="/public/shop-single-1%201.jpg" 
                  alt="Red and white striped bodysuit" 
                  className="product-image"
                />
              </div>
            </div>
            
            <div className="product-item">
              <div className="product-image-container">
                <img 
                  src="/public/shop-single-2%201.jpg" 
                  alt="Light blue bodysuit" 
                  className="product-image"
                />
              </div>
            </div>
            
            <div className="product-item">
              <div className="product-image-container">
                <img 
                  src="/public/shop-single-3%201.jpg" 
                  alt="Light pink bodysuit" 
                  className="product-image"
                
                />
              </div>
            </div>
            
            <div className="product-item">
              <div className="product-image-container">
                <img 
                  src="/public/shop-single-1%201.jpg" 
                  alt="Red and white striped bodysuit" 
                  className="product-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Shopping Call Section */}
      <section className="psc-section" id="contact-us">
        <div className="container psc-container">
          <h2 className="psc-title">Our Personal Shopping Call</h2>
          <div className="psc-grid">
            <div className="psc-card psc-form-card">
              <h3 className="psc-form-title">Send us a Message</h3>
              <p className="psc-form-subtext">Fill out the form below and our team will get back to you within 24 hours.</p>
              <form className="psc-form" onSubmit={handleVideoCallAppointmentSubmit}>
                <div className="psc-row">
                  <div className="psc-field">
                    <label className="psc-label">First Name*</label>
                    <input type="text" className="psc-input" placeholder="Enter First name" aria-label="First Name" />
                  </div>
                  <div className="psc-field">
                    <label className="psc-label">Last Name*</label>
                    <input type="text" className="psc-input" placeholder="Enter Last name" aria-label="Last Name" />
                  </div>
                </div>
                <div className="psc-row">
                  <div className="psc-field psc-field-full">
                    <label className="psc-label">Baby Age:</label>
                    <input type="text" className="psc-input psc-input-full" placeholder="Enter Baby Age" aria-label="Baby Age" />
                  </div>
                </div>
                <div className="psc-row">
                  <div className="psc-field psc-field-full">
                    <label className="psc-label">Preffered Time slot</label>
                    <select className="psc-input psc-input-full" aria-label="Preferred Time Slot" defaultValue="">
                      <option value="" disabled>Select</option>
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                    </select>
                  </div>
                </div>
                <div className="psc-row">
                  <div className="psc-field psc-field-full">
                    <label className="psc-label">Your Whatsapp Number</label>
                    <input type="text" className="psc-input psc-input-full" placeholder="eg. +91 xxxxx xxxxx" aria-label="WhatsApp Number" />
                  </div>
                </div>
                <button type="submit" className="psc-submit">Book Video-Call Appointment</button>
              </form>
            </div>
            <div className="psc-card psc-image-card">
              <img src="/public/Rectangle%2069.jpg" alt="Video call with smiling person" className="psc-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {isSuccessOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="booking-success-title" onClick={closeSuccessModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-icon">✅</div>
              <h3 id="booking-success-title" className="modal-title">Appointment Booked</h3>
              <button className="modal-close" aria-label="Close" onClick={closeSuccessModal}>×</button>
            </div>
            <div className="modal-body">
              <p>You have successfully booked a video-call appointment. Our team will contact you shortly.</p>
            </div>
            <div className="modal-actions">
              <button className="modal-btn modal-btn-primary" onClick={closeSuccessModal}>Great!</button>
            </div>
          </div>
        </div>
      )}
      
      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/public/NAT%20Logo%201.svg" alt="Natraj Fashions" className="logo-img" />
            </div>
            
            <div className="footer-columns">
              <div className="footer-col">
                <h4 className="footer-heading">EXPLORE</h4>
                <ul className="footer-links">
                  <li><a href="#">Home</a></li>
                  <li><a href="#features">Feature</a></li>
                  <li><a href="#category">Category</a></li>
                  <li><a href="#promise">Promise</a></li>
                </ul>
              </div>
              
              <div className="footer-col">
                <h4 className="footer-heading">LEARN</h4>
                <ul className="footer-links">
                  <li><a href="#products">Product</a></li>
                  <li><a href="#subscribe">Subscribe</a></li>
                  <li><a href="#contact-us">Contact Us</a></li>
                </ul>
              </div>
              
              <div className="footer-col">
                <h4 className="footer-heading">LOCATION</h4>
                <div className="footer-address">
                    <a
                    href="https://www.google.com/maps/search/?api=1&query=Natraj%20Fashion%2C%207%2C%20New%20Empire%2C%20University%20Road%2C%20Indira%20Circle%2C%20Rajkot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-address-link"
                  >
                    <p>Natraj Fashion, 7, New Empire</p>
                    <p>University Road</p>
                    <p>Indira Circle</p>
                    <p>Rajkot</p>
                  </a>
                </div>
                <div className="footer-contact">
                  <h5 className="contact-heading">Contact No.</h5>
                  <a href="tel:+918141334111" className="contact-number">+91-8141334111</a>
                </div>
              </div>
            </div>
          </div>
          
          <hr className="footer-divider" />
          
          <div className="footer-bottom">
            <div className="footer-copyright">Copyright 2025 - Natraj Fashion All rights reserved</div>
            <div className="footer-powered">Powered By <a href="https://codelix.in" target="_blank" rel="noopener noreferrer" className="footer-link">Codelix IT Solutions Pvt. Ltd.</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
