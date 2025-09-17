import React from 'react';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Founder & CEO",
      image: "https://via.placeholder.com/200x200/FF6B6B/FFFFFF?text=SJ",
      bio: "Passionate about bringing the latest fashion trends to our customers."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Creative Director",
      image: "https://via.placeholder.com/200x200/4ECDC4/FFFFFF?text=MC",
      bio: "Leading our creative vision and ensuring every piece tells a story."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Head of Design",
      image: "https://via.placeholder.com/200x200/45B7D1/FFFFFF?text=ER",
      bio: "Creating timeless designs that blend comfort with style."
    },
    {
      id: 4,
      name: "David Kim",
      position: "Marketing Manager",
      image: "https://via.placeholder.com/200x200/96CEB4/FFFFFF?text=DK",
      bio: "Connecting our brand with fashion enthusiasts worldwide."
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "50K+", label: "Happy Customers" },
    { number: "1000+", label: "Products" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <h1>About Natraaj Fashion</h1>
            <p>We're passionate about bringing you the latest fashion trends while maintaining the highest quality standards.</p>
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2014, Natraaj Fashion began as a small boutique with a big dream: to make high-quality fashion 
                accessible to everyone. What started as a passion project has grown into a beloved brand that serves 
                thousands of customers worldwide.
              </p>
              <p>
                We believe that fashion is more than just clothing—it's a form of self-expression, confidence, and 
                creativity. Every piece in our collection is carefully curated to ensure it meets our high standards 
                for quality, comfort, and style.
              </p>
            </div>
            <div className="story-image">
              <img src="https://via.placeholder.com/500x400/F8F9FA/6C757D?text=Our+Story" alt="Our Story" />
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="mission-values">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              To inspire confidence and creativity through accessible, high-quality fashion that empowers individuals 
              to express their unique style and personality.
            </p>
          </div>
          
          <div className="values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">✨</div>
                <h3>Quality</h3>
                <p>We never compromise on quality, ensuring every piece meets our high standards.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🌱</div>
                <h3>Sustainability</h3>
                <p>Committed to eco-friendly practices and responsible fashion production.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">💝</div>
                <h3>Customer First</h3>
                <p>Our customers are at the heart of everything we do.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🎨</div>
                <h3>Innovation</h3>
                <p>Constantly evolving and embracing new trends and technologies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Meet Our Team</h2>
          <p className="team-intro">
            The passionate individuals behind Natraaj Fashion who work tirelessly to bring you the best fashion experience.
          </p>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="contact-cta">
          <h2>Get in Touch</h2>
          <p>Have questions or want to learn more about us? We'd love to hear from you!</p>
          <button className="contact-btn">Contact Us</button>
        </section>
      </div>
    </div>
  );
};

export default About;
