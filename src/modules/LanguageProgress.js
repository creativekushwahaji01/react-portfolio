import React, { useEffect, useState, useRef } from 'react';
import '../css/Language.css';

import html from '../imgs/html-5.svg';
import css from '../imgs/css3.svg';
import JavaScript from '../imgs/javascript.svg';
import react from '../imgs/react.svg';
import mysql from '../imgs/mysql.svg';
import mongodb from '../imgs/mongodb.svg';
import Nodejs from '../imgs/nodejs.svg';
import Git from '../imgs/git.svg';
import Python from '../imgs/python-5.svg';
import c from '../imgs/c.svg';
import cplus from '../imgs/c-1.svg';
import Express from '../imgs/expressjs-icon.svg';
import Postman from '../imgs/postman.svg';
import Firebase from '../imgs/firebase-2.svg';
import Bootstrap from '../imgs/bootstrap-5-1.svg';
import Reactb from '../imgs/react-bootstrap.svg';

function LanguageProgress() {
  const [showAll, setShowAll] = useState(false);
  const progressBarRefs = useRef([]);

  const languages = [
    { name: 'HTML', progress: 95, imageSrc: html },
    { name: 'CSS', progress: 85, imageSrc: css },
    { name: 'JavaScript', progress: 75, imageSrc: JavaScript },
    { name: 'React', progress: 85, imageSrc: react },
    { name: 'MySQL', progress: 90, imageSrc: mysql },
    { name: 'MongoDB', progress: 70, imageSrc: mongodb },
    { name: 'Node.js', progress: 55, imageSrc: Nodejs },
    { name: 'Git', progress: 85, imageSrc: Git },
    { name: 'Python', progress: 85, imageSrc: Python },
    { name: 'C', progress: 60, imageSrc: c },
    { name: 'C++', progress: 60, imageSrc: cplus },
    { name: 'Express.js', progress: 80, imageSrc: Express },
    { name: 'Postman', progress: 90, imageSrc: Postman },
    { name: 'Firebase', progress: 60, imageSrc: Firebase },
    { name: 'Bootstrap', progress: 75, imageSrc: Bootstrap },
    { name: 'React-Bootstrap', progress: 70, imageSrc: Reactb },
  ];

  const visibleLanguages = showAll ? languages : languages.slice(0, 6);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
          entry.target.classList.remove('slide-out');
        } else {
          entry.target.classList.add('slide-out');
          entry.target.classList.remove('slide-in');
        }
      });
    }, options);

    progressBarRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      progressBarRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [showAll]);

  return (
    <>
    <div className="mobile">
      {languages.map((language,index) =>(
        <div key={index} className="mobile-progress-bar">
          <img src={language.imageSrc} alt={`${language.name} logo`} className="language-icon" />
        </div> 
      ))}
    </div>
    <div id="skills" className="progressdiv desktop" style={{ height: showAll ? 'auto' : '500px' }}>
      {visibleLanguages.map((language, index) => (
        <div
          key={index} 
          className="progress-bar"
          ref={(el) => (progressBarRefs.current[index] = el)}
        >
          <img src={language.imageSrc} alt={`${language.name} logo`} className="language-icon" />
          <div className="full_progress">
            <div className="progress-indicator" style={{ width: `${language.progress}%` }}></div>
            <div className="language-label">{language.name}</div>
          </div>
        </div>
      ))}
      {languages.length > 5 && (
        <button onClick={toggleShowAll} className="see-more-button">
          {showAll ? 'See Less' : 'See More'}
        </button>
      )}
    </div>
    </>
  );
}

export default LanguageProgress;
