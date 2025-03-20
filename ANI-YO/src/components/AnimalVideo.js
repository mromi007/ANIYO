import React from "react";
import "./AnimalVideo.css";
import animalVideo from "./animal.mp4"; // Ensure correct path

const AnimalVideo = () => {
  return (
    <div className="videoContainer">
      <video autoPlay loop muted className="bgVideo">
        <source src={animalVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="slogan">
        <h1>About Our Website</h1>
        <h6>
          <b>AI-Powered Animal Detection – Protecting Wildlife, Preventing Risks!</b> <br />
          Our website uses <b>YOLO algorithms</b> to detect and recognize animals in real time.<br />
          Whether it's for <b>wildlife conservation, farm monitoring, or preventing animal-vehicle collisions</b>, our system ensures safety and awareness.
        </h6>
        <h1>How It Works</h1>
        <div className="howItWorks">
          <div className="point">🔍 <b>Real-Time Detection</b><br /> AI analyzes images & videos instantly.</div>
          <div className="point">🎯 <b>YOLO Algorithm</b><br /> Detects even rare species with high accuracy.</div>
          <div className="point">📷 <b>Camera & Sensors</b><br /> Integrated with live feeds for monitoring.</div>
          <div className="point">⚠️ <b>Instant Alerts</b><br /> Notifies users when animals enter restricted zones.</div>
          <div className="point">🚀 <b>Advanced AI</b><br /> Continuously improving detection efficiency.</div>
        </div>
      </div>
    </div>
  );
};

export default AnimalVideo;
