import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage.js'
import Letters from './Letters.js'
import Contact from './Contact.js';
import Posts from "./Posts";

function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
        <Routes>
          <Route path="about" element={<Homepage />} /> {/* This will be the default page */}
          <Route path="/" element={<Letters />} />
          <Route path="/blogs/:id" element={<Posts />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;
