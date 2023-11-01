import React from "react";
import avtar2 from '../imgs/avtar2.png'
import '../App.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="nav_main">
            <div className="_nav_logo">
                <img className="nav_img_logo" src={avtar2} alt="failed" />
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#Service">Service</a></li>
                <li><Link to="/Blog">Blog</Link></li> {/* Correct path for Skills */}
            </ul>
        </div>
    )
}

export default Navbar;
