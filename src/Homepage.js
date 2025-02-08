import logo from './logo.png';
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Banner from './Banner';
import youngn from "./youngn.jpg"

function Homepage() {
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
        <Banner />
        <div className="intro">
          <h1><span>Jesus</span> is the Muse</h1>
          <p>Welcome to a place where you can grow your Faith. God is perfect, and He encourages all of us to explore His perfection. One of the greatest things that we can do in this life is to get to know our Creator. As His creation, because we were originally made in His image, we also learn more & more about ourselves. The purpose of this blog is to promote curiosity and learning by addressing a wide range of topics with the belief that God has an opinion for everything. Enjoy! </p>
        </div>
        <div className="linkies">
          <h4> :: Check out the <Link to="/">Blog</Link> </h4>
          <h4> :: Questions? Comments? Send them <Link to="/contact">Here</Link> </h4>
        </div>
        <div className="about">
            <h1>About Me</h1>
            <p class="infome">My name is Tariq Hutcherson. I'm a 27 year old who decided to pivot into Software Development. I grew up with an idea of what Christianity was. I even attended church for a little while in my middle school years. However, I didn't commit to it truly until November 23rd, 2014 when I accepted Jesus Christ as my Lord & Savior almost 2 months after turning 17. After over a decade of highs and lows, I continue walking with Him. I aim for this site to be a marriage between my ongoing journey in the Faith and my ongoing experience in tech.</p>
        </div>
        <img src={youngn} alt="youngn" className="youngn"/>
      </div>
    )
}

export default Homepage;