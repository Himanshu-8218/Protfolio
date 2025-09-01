import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <motion.section id="about"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <motion.div id="my-image"
      initial={{ scale: 0.85, rotate: -2, opacity: 0 }}
      whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
    >
      <img src="/photo.jpg" alt="Profile" />
    </motion.div>
    <motion.p id="detail"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      🎓 B.Tech in Information Technology | Techno Main Salt Lake (CGPA: 8.04)<br/>
💻 Aspiring Data Scientist | Laravel Developer | Python & C/C++ Enthusiast<br/>

I’m a tech-driven individual with a strong foundation in software development and a keen interest in data science. During my B.Tech in IT, I gained hands-on experience in building real-world applications using Laravel, including a Gen-Ai Driven Task Management System and other dynamic web solutions. I'm also actively learning Data Science with Python, focusing on data analysis, visualization, and machine learning fundamentals.<br/>

In addition to web development, I’m comfortable with C/C++, which has helped me strengthen my problem-solving and algorithmic thinking.<br/>  
    </motion.p>
  </motion.section>
);

export default About;
