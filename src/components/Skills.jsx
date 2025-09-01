import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'C++', class: 'eighty-five mb-blue', percent: 85 },
  { name: 'Laravel', class: 'eighty-nine mb-red', percent: 89 },
  { name: 'React', class: 'eighty-five mb-cyan', percent: 85 },
  { name: 'MySQL', class: 'eighty-five mb-green', percent: 85 },
  { name: 'MongoDB', class: 'seventy-eight mb-purple', percent: 78 },
  { name: 'Git', class: 'eighty-five mb-orange', percent: 85 },
  { name: 'GitHub', class: 'eighty-five mb-pink', percent: 85 },
  { name: 'CSS', class: 'eighty-percent mb-yellow', percent: 80 },
  { name: 'JAVA', class: 'fifty-percent mb-teal', percent: 50 },
  { name: 'JavaScript', class: 'sixty-five mb-indigo', percent: 65 },
  { name: 'PHP', class: 'seventy-percent mb-lime', percent: 70 },
  { name: 'OpenCV', class: 'fifty-percent mb-amber', percent: 50 },
  { name: 'NLP', class: 'fifty-percent mb-emerald', percent: 50 },
  { name: 'GridSearch Cv', class: 'seventy-five mb-rose', percent: 75 },
  { name: 'Python', class: 'eighty-five-percent mb-violet', percent: 85 },
  { name: 'HTML', class: 'ninty-percent mb-sky', percent: 90 },
];

const barVariants = {
  hidden: { width: 0 },
  visible: percent => ({ width: percent + '%' })
};

const Skills = () => (
  <motion.section id="skills"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="section-heading mb75px">
      <span>
        <i className="fa-solid fa-chalkboard-user"></i>
      </span>
      <span>SKILLS</span>
    </h1>
    <div className="skills-display">
      {skills.map(skill => (
        <div className="skill-prog" key={skill.name}>
          <motion.div
            className={skill.class}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={skill.percent}
            variants={barVariants}
            transition={{ duration: 1 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="skill-name">
              <span>{skill.name}</span>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  </motion.section>
);

export default Skills;
