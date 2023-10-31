import React from "react";
import Navbar from './modules/navbar'
import LanguageProgress from './modules/LanguageProgress';
// import selfimg3 from './imgs/selfimg3.png';
import './App.css';
import webimg from '../src/imgs/webdeveloperimg.png';
import Blog from "./modules/blog";

function App() {
  return (
    <div className="main">
      <Navbar />
      <div className="about">
        <div className="self_intro">
          <div className="introtext">
            <p className="text1">Im, </p>
            <p className="text2">Dilip</p>
          </div>
          <div className="introtext">
            <p className="text1">Front-end </p>
            <p className="text2">Developer</p>
          </div>
          <div className="introtext">
            <p className="text1">designer, </p>
            <p className="text2">coder</p>
          </div>
          <div className="introtext">
            <p className="text1">And </p>
            <p className="text2">Tech-Guru</p>
          </div>
          <div className="intro_bio">I design and create functional and beautiful applications with passion and a focus on user experience and high quality.</div>
        </div>
        <div className="self_img">
          <img className="self_img" src={webimg} alt="Failed"></img>
        </div>
      </div>
      <h1 className="lang_pro_bar">Language Learning Progress</h1>
      <LanguageProgress />
      <Blog/>
    </div>
  )
}
export default App;