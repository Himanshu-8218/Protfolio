import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navItem = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0 }
};

const list = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header id="body-header">
      <nav>
        <div className="nav-inner">
          {/* Desktop Navigation */}
          <motion.ul className="horizontal-list desktop-nav" variants={list} initial="hidden" animate="visible">
            <motion.li variants={navItem}><a href="#" id="nav">Home</a></motion.li>
            <motion.li variants={navItem}><a href="#about" id="nav">About</a></motion.li>
            <motion.li variants={navItem}><a href="#skills" id="nav">Skills</a></motion.li>
            <motion.li variants={navItem}><a href="#experience" id="nav">Experience</a></motion.li>
            <motion.li variants={navItem}><a href="#projects" id="nav">Projects</a></motion.li>
            <motion.li variants={navItem}><a href="#contact" id="nav">Contact</a></motion.li>
          </motion.ul>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Sidebar */}
        <motion.div 
          className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}
          initial={{ x: '100%' }}
          animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          <div className="mobile-sidebar-content">
            <div className="mobile-sidebar-header">
              <h3>Portfolio</h3>
              <button 
                className="close-btn"
                onClick={closeMobileMenu}
                aria-label="Close mobile menu"
              >
                ×
              </button>
            </div>
            <ul className="mobile-nav-list">
              <li><a href="#" onClick={closeMobileMenu}>Home</a></li>
              <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
              <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
              <li><a href="#experience" onClick={closeMobileMenu}>Experience</a></li>
              <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
              <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
            </ul>
          </div>
        </motion.div>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="mobile-overlay"
            onClick={closeMobileMenu}
          ></div>
        )}
      </nav>

    <div className="hero-center">
      <motion.h1 id="name-tag"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Himanshu Verma
      </motion.h1>
      <motion.ul className="horizontal-list-social" variants={list} initial="hidden" animate="visible" style={{ marginTop: '0.75rem' }}>
        <motion.li variants={navItem}><a href="https://www.facebook.com/highvoltage.hv.8218/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a></motion.li>
        <motion.li variants={navItem}><a href="https://www.instagram.com/high_voltage_8218/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></motion.li>
        <motion.li variants={navItem}><a href="https://github.com/Himanshu-8218" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a></motion.li>
        <motion.li variants={navItem}><a href="https://www.linkedin.com/in/himanshu-verma-29851b222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a></motion.li>
      </motion.ul>
    </div>
  </header>
  );
};

export default Header;
