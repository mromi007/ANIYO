import React, { useEffect } from "react";
import "./DemoVideo.css";

const DemoVideo = () => {
  useEffect(() => {
    const bgAnimation = document.getElementById("demoGrid");
    const numberOfColorBoxes = 400;

    for (let i = 0; i < numberOfColorBoxes; i++) {
      const colorBox = document.createElement("div");
      colorBox.classList.add("colorBox");
      bgAnimation.append(colorBox);
    }
  }, []);

  return (
    <div className="demo-container">
      {/* Background Animation Grid */}
      <div className="demo-grid" id="demoGrid"></div>

      <div className="demo-row">
        {/* Video Section */}
        <div className="demo-video">
          <video
            src={process.env.PUBLIC_URL + "/demo/demo1.mp4"}
            className="video-style"
            muted
            controls
            loop
          />
        </div>

        {/* Text Content Section */}
        <div className="demo-text">
          <h2 className="demo-title">Demo</h2>
          <p className="demo-description">
          This engaging demo highlights the impressive capabilities of our system, showcasing a video featuring breathtaking footage of zebras and elegant giraffes. The results are truly remarkable, as our advanced model accurately detects and classifies these magnificent creatures with exceptional precision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoVideo;
