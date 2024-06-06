import React from "react";
import Home from "./home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './modules/navbar';
import Blog from './modules/blog';
import Footer from "./modules/Footer";
import ContactForm from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use the "index" property */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="*" element={<Home />} /> {/* Set Home as the default route */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
