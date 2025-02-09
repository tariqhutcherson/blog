import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import React from 'react';
import Homepage from './Homepage.js'
import Letters from './Letters.js'
import Contact from './Contact.js';
import Posts from "./Posts";

function App() {
  return (
        <Routes>
          <Route path="about" element={<Homepage />} /> {/* This will be the default page */}
          <Route path="/" element={<Letters />} />
          <Route path="/blogs/:id" element={<Posts />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>   
  );
}

export default App;
