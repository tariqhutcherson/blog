import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import blogs from "./Blogs";
import logo from './logo.png';

function Posts() {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found!</p>;
  }

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
      <div className="bloginfo">
        <h1 className="blogtitle">{blog.title}</h1>
        <h4> Written By: {blog.author}</h4>
        <p className="content"><pre>{blog.content}</pre></p>
      </div>  
    </div>
  );
}

export default Posts;