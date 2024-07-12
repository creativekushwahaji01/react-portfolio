import React from "react";
import webimg from '../imgs/webdeveloperimg.png';
import '../css/Home.css';

function About() {
  return (
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
      <div className="self_img_main">
        <img className="self_img" src={webimg} alt="Failed"></img>
      </div>
    </div>
  )
}
export default About;