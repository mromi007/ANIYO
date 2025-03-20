import React from 'react';
import Detect from './Detect';
import AIMusic from './AIMusic';
import DemoVideo from "./DemoVideo";
import AnimalVideo from './AnimalVideo';
import "./Detect.css";
import AboutYOLO from "./AboutYOLO";


const Landing = () => {
    return (
        <div className="App">
        <div id="overlayer"></div>
  
        <div className="loader">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>

        <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div className="site-mobile-menu-body"></div>
          </div>

        <AIMusic></AIMusic>
        <AnimalVideo />
        <DemoVideo />
        <AboutYOLO/>
        <Detect/>
        </div>
      </div>
    )
}

export default Landing;