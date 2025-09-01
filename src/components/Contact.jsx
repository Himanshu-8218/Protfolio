import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ sending: false, ok: null, msg: '' });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    try {
      setStatus({ sending: true, ok: null, msg: '' });
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus({ sending: false, ok: true, msg: 'Message sent successfully!' });
      formRef.current.reset();
    } catch (err) {
      setStatus({ sending: false, ok: false, msg: 'Failed to send. Please try again.' });
    }
  };

  return (
    <motion.section id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="section-heading mb75px">
        <span style={{ color: 'white' }}>
          <i className="fa-regular fa-address-card"></i>
        </span>
        <span style={{ color: 'white' }}>CONTACT</span>
      </h1>

      <div className="contact-box">
        <div className="Form" style={{ flex: 1 }}>
          <form ref={formRef} onSubmit={onSubmit}>
            <input type="text" name="from_name" placeholder="Your name" required />
            <input type="email" name="reply_to" placeholder="Your email" required />
            <textarea name="message" rows={5} placeholder="Message" required />
            <button className="sub-btn" type="submit" disabled={status.sending}>
              {status.sending ? 'Sending...' : 'Send Message'}
            </button>
            {status.ok === true && <p style={{ color: '#22c55e', marginTop: '.5rem' }}>{status.msg}</p>}
            {status.ok === false && <p style={{ color: '#ef4444', marginTop: '.5rem' }}>{status.msg}</p>}
          </form>
        </div>

        <div style={{ flex: 1 }}>
          <div id="detail_con">
            <h1>Get in touch</h1>
            <p>
              I’m available for freelance/part-time work. Fill the form and I’ll get back to you via email.
            </p>
            <h3> My Address </h3>
            <div className="my-details-info-container">
              <i className="fas fa-map-marker-alt"></i>
              <span>Darbhanga, Bihar, India</span>
            </div>
            <div className="my-details-info-container">
              <i className="fas fa-mobile-alt"></i>
              <span>7970660025</span>
            </div>
            <div className="my-details-info-container">
              <i className="far fa-envelope"></i>
              <span>himanshu911725@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div id="horizontal">
        <ul className="horizontal-list-social">
          <li><a href="https://www.facebook.com/highvoltage.hv.8218/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a></li>
          <li><a href="https://www.instagram.com/high_voltage_8218/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href="https://github.com/Himanshu-8218" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/himanshu-verma-29851b222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Contact;
