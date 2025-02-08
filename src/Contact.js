import logo from './logo.png';
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faThreads, faXTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Form from './Form.js'

function Contact() {
    return (
        <div>
            <nav className="navbar">
            <img src={logo} alt="App Logo" className="logo-image" />
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <ul className="links">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <h1 className="tap">Reach Out</h1>
          <div className="contactintro">
            <p>Don't hesitate to reach out if you have any questions about what you see on this blog or want to submit any topic requests. Feel free to tap in with me on my socials, as well.</p>
          </div>
          <Form />
          <div className="icons">
            <a href="https://m.facebook.com/p/Tariq-Hutcherson-100008723192654/">
            <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/tariqhutcherson/">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.threads.net/@tariqhutcherson">
            <FontAwesomeIcon icon={faThreads} />
            </a>
            <a href="https://twitter.com/tariqhutcherson">
            <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/donald-tariq-hutcherson-iii-3b56b917b">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/tariqhutcherson">
            <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
    )
}

export default Contact;