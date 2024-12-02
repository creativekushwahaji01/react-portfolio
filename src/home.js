import React from "react";
import LanguageProgress from './modules/LanguageProgress';
import './App.css';
import About from "./modules/About";
import Centre from "./modules/Service";
import Bio from "./modules/bio";
import Icons from "./modules/Icons";

const home = () => {
  return (
    <div className="main">
      <About />
      {/* <Icons />   */}
      < Centre />
      <Bio />
      <h1 className="lang_pro_bar" >Language Learning Progress</h1>
      <LanguageProgress />
    </div>
  )
}

export default home



