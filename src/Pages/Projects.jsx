import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css';

const projects = [
  {
    title: 'Fingerprint Door Lock System using Arduino',
    description: 'A security system that uses fingerprint recognition to unlock doors. Built with Arduino for hardware control and a fingerprint sensor.',
    technologies: ['Arduino', 'Fingerprint Sensor'],
    link: 'https://github.com/your-repo/fingerprint-door-lock'
  },
  {
    title: 'Subjective Exam Evaluation using BERT',
    description: 'An NLP project that uses BERT to evaluate subjective exam answers, improving the grading process by leveraging advanced machine learning techniques.',
    technologies: ['BERT', 'Python', 'TensorFlow'],
    link: 'https://github.com/your-repo/subjective-exam-evaluation'
  },
  {
    title: 'Ecommerce Website',
    description: 'A full-featured ecommerce site for selling, including product listings, cart management, and checkout processes.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/your-repo/ecommerce-website'
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="my-projects">
      <div className="my-projects-container">
        <h1 className="my-projects-title" data-aos="fade-up">My Projects</h1>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <p className="project-technologies">
                Technologies: {project.technologies.join(', ')}
              </p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
