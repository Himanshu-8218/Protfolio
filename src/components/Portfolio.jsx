import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Portfolio = () => (
  <motion.section id="projects"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="section-heading mb75px">
      <span>
        <i className="fa-solid fa-briefcase"></i>
      </span>
      <span>Projects</span>
    </h1>

    <motion.div className="projects-grid" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {projects.map(p => (
        <motion.article className="project-card" key={p.id} variants={item}>
          <div className="project-media">
            <div className="project-badge">
              <i className="fa-solid fa-code"></i>
            </div>
          </div>
          <div className="project-content">
            <h3>{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            <div className="chips">
              {p.tech.map(t => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>
            <div className="card-actions">
              {/* {p.demoUrl && <a className="btn-link" href={p.demoUrl} target="_blank" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>} */}
              {p.sourceUrl && <a className="btn-link" href={p.sourceUrl} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i> Code</a>}
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  </motion.section>
);

export default Portfolio;
