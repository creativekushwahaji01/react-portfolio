import React from "react";
import LanguageProgress from './modules/LanguageProgress';
import './App.css';
import About from "./modules/About";
import SocialIcons from "./modules/Sociallinks";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Centre from "./modules/Service";
import Bio from "./modules/bio";


const home = () => {
  return (
    <div>
      <div className="main">
        <About />
        < Centre/>
        <Bio/>
        <h1 className="lang_pro_bar">Language Learning Progress</h1>
        <LanguageProgress />
        <SocialIcons/>
       
      </div>
    </div>
  )
}

export default home

 

