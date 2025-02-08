import logo from './logo.png';
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import blog from "./Blogs";

function Letters() {
    const sortedBlogs = blog.sort((a, b) => new Date(b.date) - new Date(a.date));

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
          <div className="top">
            <div className="title">
              <h1>Timeless.</h1>
            </div>
            <div className="thoughts">
              <p>Thoughts that transcend time.</p>
            </div>
          </div>

          {/* <Verse /> */}

          <div className="container">
              {sortedBlogs.map((blog) => (
            <div key={blog.id}>
              <img src={blog.image} alt={blog.title} className="blogimage" />
              <h2>{blog.title}</h2>
              <h4>{blog.author}</h4>
              <p>{blog.preview}</p>
              <h5>{blog.date}</h5>
              <Link to={`/blogs/${blog.id}`} className="more">Read More</Link>
            </div>
              ))}
          </div>

        </div>
    )
}

export default Letters;