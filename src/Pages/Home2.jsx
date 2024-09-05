// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import Profilepic from '../Assets/Athii.png';
import AboutMe from './AboutMe';

const Home = () => {
  return (
    <div>
    <div
      style={{
        background: 'linear-gradient(to bottom, #000000, #333333)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10vh 0',
      }}
    >
      <img
        src={Profilepic}
        alt="Athira Anil's profile"
        style={{ maxWidth: '100%', marginBottom: '2rem' }}
      />
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Athira Anil</h1>
      <h2 style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Web Development | MERN Stack | Full Stack
      </h2>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/projects" style={{ marginRight: '1rem' }}>
          View Projects
        </Link>
        <Link to="/experience">View Experience</Link>
      </div>
      <button
        style={{
          borderRadius: '6px',
          padding: '1vh 2vh',
          backgroundColor: '#000',
          color: '#fff',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s ease',
          marginBottom: '1rem',
        }}
      >
        Dig into my universe
      </button>
      <button
        style={{
          borderRadius: '6px',
          padding: '1vh',
          backgroundColor: '#000',
          color: '#fff',
          marginBottom: '1rem',
        }}
      >
        Services
      </button>
      <button
        style={{
          borderRadius: '6px',
          padding: '1vh',
          backgroundColor: 'lightblue',
          color: 'white',
        }}
      >
        Get in touch
      </button>
    </div>
    <AboutMe />
    </div>
  );
};

export default Home;
