import React from "react";
import LanguageProgress from './modules/LanguageProgress';
import './App.css';
import About from "./modules/About";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Centre from "./modules/Service";
import Bio from "./modules/bio";
import ScrollDown from "./modules/Scroldown";


const home = () => {
  return (
    <div>
      <div className="main">
        <About />
        <ScrollDown/>
        < Centre/>
        <Bio/>
        <h1 className="lang_pro_bar">Language Learning Progress</h1>
        <LanguageProgress />
        {/* <SocialIcons/> */}
       
      </div>
    </div>
  )
}

export default home

 

