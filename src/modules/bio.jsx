import React from "react";
import '../App.css';
import ImageSwap from "./ImageAnimation";

function Bio(){
    return(
        <div className="biomain ">
            <div className="bio_text">
                <p className="bio_text_child t1">I am a second-year Computer Science Engineering student at IES College of Technology and Management, Bhopal. With a passion for technology and a strong foundation in computer science, I'm on a journey to explore the dynamic world of web development. As a fresher in web development, I'm eagerly seeking opportunities for internships and freelancing projects to further enhance my skills and gain valuable industry experience.</p>

                <p className="bio_text_child t1">One unique aspect about me is that I am a Navodayan, which reflects my dedication to education and my commitment to making the most of every opportunity that comes my way.</p>

                <p className="bio_text_child t1">My goal is to contribute to the digital landscape, bring creative ideas to life, and help businesses and individuals establish a compelling online presence through web development. I'm excited to embark on this exciting career path and grow as a professional in the field of web development.</p>

                <p className="bio_text_child t1">Feel free to get in touch with me if you have any projects or opportunities where I can be of help. Let's collaborate and create something amazing together!</p>
            </div>
            <div className="bio_img">
            <ImageSwap/>
            </div>
        </div>
    )
}
export default Bio; 