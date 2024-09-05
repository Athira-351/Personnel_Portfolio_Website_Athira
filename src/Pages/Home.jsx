import React from 'react';
import { Link } from 'react-router-dom';
// import Profilepic from '../Assets/Athii.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import AboutMe from './AboutMe';
import Projects from './Projects';
import GetInTouch from './Contact';
import { CSSTransition } from 'react-transition-group';
import './Home.css'; // Make sure to create this CSS file for animations

const Home = () => {
  return (
    <div>
      <div className="container-fluid d-flex align-items-center home-hero">
        <div className="row w-100">
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center">
            <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
              <div className="text" style={{ maxWidth: '600px' }}>
                <h1 className="fade-in-text">Athira Anil</h1>
                <h2 className="fade-in-text" style={{
                  fontSize: '1.5rem',
                  fontWeight: '300',
                  letterSpacing: '1.5px',
                  marginBottom: '2rem',
                  color: '#ddd'
                }}>Web Development | MERN Stack | Full Stack</h2>
                <div className="links mb-4">
                  <Link to="#" className="mr-3 link-underline">
                    View Projects
                  </Link>
                  &emsp;
                  <Link to="#" className="link-underline">
                    View Experience
                  </Link>
                </div>
                <div className="d-flex gap-3 mb-4">
                  <button
                    className="btn animated-btn gradient-btn">
                    Dig into my universe
                  </button>

                  <button className="btn animated-btn text-white" style={{ backgroundColor: '#333' }}>
                    Services
                  </button>
                </div>
                <button className="btn animated-btn gradient-blue-btn">
                  Get in touch
                </button>
              </div>
            </CSSTransition>
          </div>
          {/* <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
            <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
              <img src={Profilepic} alt="Athira Anil's profile" className="img-fluid zoom-in" style={{ maxWidth: '500px' }} />
            </CSSTransition>
          </div> */}
        </div>
      </div>
      <AboutMe />
      <Projects />
      <GetInTouch />
    </div>
  );
};

export default Home;
