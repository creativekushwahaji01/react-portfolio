import React from "react";
import avtar2 from '../src/imgs/avtar2.png'
import './App.css'
// import About from './About'


function navbar() {
    return (
        <div className="nav_main">
            <div className="_nav_logo">
                <img className="nav_img_logo"  src={avtar2} alt="failed"/>
            </div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="./About">About</a></li>
            <li><a href="./modules/blogs.js">Blogs</a></li>
            <li><a href="https://creativekushwahaji01.github.io/">Contact</a></li>
        </ul>
        </div>
        
    )
}
export default navbar;