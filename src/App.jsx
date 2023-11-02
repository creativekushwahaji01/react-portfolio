  import React from "react";
  import Home from "./home";
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Navbar from './modules/navbar';
  import Blog from './modules/blog';
  import Footer from "./modules/Footer";

  function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} /> {/* Use the "index" property */}
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
        {/* <Home/> */}
        <Footer/>
      </Router>
    );
  }

  export default App;
