import React from "react";
import Navbar from './navbar'
import LanguageProgress from './modules/LanguageProgress';
import selfimg3 from './imgs/selfimg3.png'
import './App.css'

function App() {
  return (
    <div className="main">
      <Navbar />
      <div className="about">
        <div className="self_intro">
          <div className="introtext">
            <p className="text1">Im,</p>
            <p className="text2">Dilip</p>
          </div>
          <div className="introtext">
            <p className="text1">Front-end</p>
            <p className="text2">Developer</p>
          </div>
          <div className="introtext">
            <p className="text1">designer,</p>
            <p className="text2">coder</p>
          </div>
          <div className="introtext">
            <p className="text1">And</p>
            <p className="text2">Tech-Guru</p>
          </div>
        </div>
        <div className="self_img">
          <img className="self_img" src={selfimg3} alt="Failed"></img>
        </div>
      </div>
      <h1>Language Learning Progress</h1>
      <LanguageProgress />
    </div>
  )
}
export default App;