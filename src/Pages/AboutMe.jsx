import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutMe.css';

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="about-me">
      <div className="about-me-container">
        <h1 className="about-me-title" data-aos="fade-up">About Me</h1>
        <div className="about-me-content">
          <div className="about-me-text" data-aos="fade-up" data-aos-delay="100">
            <p>
              Hello! I’m Athira Anil, a passionate and driven software developer with a keen interest in creating impactful and innovative solutions. I specialize in full-stack development, with experience in various technologies and frameworks.
            </p>
            <p>
              My journey in the tech world started with a fascination for programming and a desire to understand how things work behind the scenes. Over the years, I’ve honed my skills in React, Node.js, and several other technologies. My goal is to continuously learn and grow while contributing to meaningful projects.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, reading tech blogs, or working on personal projects. I’m always eager to connect with like-minded individuals and collaborate on exciting new ventures.
            </p>
          </div>
          {/* <div className="about-me-image" data-aos="zoom-in" data-aos-delay="200">
            <img src="path/to/your-image.jpg" alt="Athira Anil" />
          </div> */}
        </div>
        <div className="about-me-skills" data-aos="fade-up" data-aos-delay="300">
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
