import React from 'react';
import { motion } from 'framer-motion';
import { experienceItems } from '../data/experience';

const Experience = () => (
  <motion.section id="experience"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="section-heading mb75px">
      <span>
        <i className="fas fa-briefcase"></i>
      </span>
      <span> Work Experience </span>
    </h1>
    <div className="timeline">
      {experienceItems.map((item, idx) => (
        <motion.div
          className={`timeline-box${idx % 2 === 1 ? ' left' : ''}`}
          key={item.id}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: idx * 0.15 }}
        >
          <div className="timeline-container">
            {item.logo && <img src={item.logo} height="10%" width="20%" alt={`${item.company} Logo`} />}
            <h3 className="experience-designation m0 m-blue"> {item.designation} </h3>
            <h4 className="experience-company-name"> {item.company} </h4>
            <h5 className="experience-duration m0"> {item.duration} </h5>
            <p className="experience-description text-align-justify"> {item.description} </p>
          </div>
        </motion.div>
      ))}
      <div className="timeline-divider">
        <div className="timeline-traveller">
          <div>
            <i className="fas fa-plane"></i>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default Experience;
