import React from "react";
import Home from "./home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './modules/navbar';
import Blog from './modules/blog';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use the "index" property */}
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {/* <Home/> */}
      
    </Router>
  );
}

export default App;
