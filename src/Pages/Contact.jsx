import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importing social media icons
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send('service_tacwsy3', 'template_lvf3k72', formData, 'QbeMqSkcmMz34km13')
      .then((response) => {
        setSubmitMessage('Message sent successfully!');
        setFormData({ from_name: '', from_email: '', message: '' });
        setIsSubmitting(false);
      }, (err) => {
        setSubmitMessage('Failed to send message.');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="get-in-touch" data-aos="fade-up">
      <div className="get-in-touch-container">
        <div className="get-in-touch-content">
          <div className="form-column" data-aos="fade-right">
            <h1 className="get-in-touch-title">Get in Touch</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                />
              </div>
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitMessage && <p className="submit-message">{submitMessage}</p>}
            </form>
          </div>
          <div className="info-column" data-aos="fade-left">
            <h2>Connect with me:</h2>
            <div className="contact-info">
              <ul>
                <li><a href="https://www.linkedin.com/in/athira-anil-0b547a260/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a></li>
                <li><a href="https://github.com/Athira-351" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a></li>
                <li><a href={`mailto:athiraanil351@gmail.com`}><FaEnvelope /> Email</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
