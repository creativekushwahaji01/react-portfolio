import React from 'react';
import "../css/service.css"

const Centre = () => {
  return (
    <div className="center" id="Service">
      <h2 className="hed">The full product development stack</h2>
      <div className="centop">
        <p className="cen1 container reveal">
          From designing the interface to implementing your fully featured application - I can provide the full product design process from an idea to a finished high-quality app, polished with fantastic design and running on state-of-the-art software.
        </p>
        <div className="container reveal ">
          <div className="ref2 shiny-cta">
            <div className="fe serv1 ">
              <div className="fe1">
                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h1>Front-end Developer</h1>
              <p>
                I create functional, beautiful, and responsive frontend applications for the web with modern technologies.
              </p>
            </div>
            <div className="be serv1">
              <div className="be1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                </svg>
              </div>
              <h1>Back-end Developer</h1>
              <p>
                I build high-quality cloud-based backend services for your applications to scale and host all your users.
              </p>
            </div>
            <div className="ux serv1">
              <div className="ux1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                  <line x1="8" y1="2" x2="8" y2="18"></line>
                  <line x1="16" y1="6" x2="16" y2="22"></line>
                </svg>
              </div>
              <h1>UX design</h1>
              <p>
                I create applications for real users to match their needs and expectations, satisfy their needs and ease their lives.
              </p>
            </div>
            <div className="ui serv1">
              <div className="ui1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
              <h1>UI development</h1>
              <p>
                I design beautiful user interfaces for applications to work on all screen sizes. Your colors, typography, and more, all pixel perfect and beautiful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Centre;
