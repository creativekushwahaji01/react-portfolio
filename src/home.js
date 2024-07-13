import React from "react";
import LanguageProgress from './modules/LanguageProgress';
import './App.css';
import About from "./modules/About";
import Centre from "./modules/Service";
import Bio from "./modules/bio";

const home = () => {
  return (
    <div className="main">
      <About />
      < Centre />
      <Bio />
      <h1 className="lang_pro_bar" >Language Learning Progress</h1>
      <LanguageProgress />
    </div>
  )
}

export default home



