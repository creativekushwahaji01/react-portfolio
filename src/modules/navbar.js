import React from "react";
import avtar2 from '../imgs/avtar2.png'
import '../App.css'
// import Blog from "./blog";
import { Link } from 'react-router-dom';
// import About from './About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function navbar() {
    return (
        <div className="nav_main">
            <div className="_nav_logo">
                <img className="nav_img_logo"  src={avtar2} alt="failed"/>
            </div>
        {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="./About.js">About</Link></li>
            {/* <li><a href="../modules/blog.js">Blogs</a></li> */}
            {/* <li><Link to="../modules/blog.js">Blogs</Link></li>
            <li><Link to="#contact">Contact</Link></li>
            <li><Link to="#resume">View Resume</Link></li>
        </ul> */} 
        <li><Link to="/">Home</Link></li>
        <li><Link to="./modules/Skills">Skills</Link></li>
        </div>
    )
}
export default navbar;