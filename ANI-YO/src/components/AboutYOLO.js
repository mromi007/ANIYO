import React, { useEffect } from "react";
import "./AboutYOLO.css";


const AboutYOLO = () => {
  useEffect(() => {
    const bgAnimation = document.getElementById("yoloGrid");
    const numberOfColorBoxes = 400;

    for (let i = 0; i < numberOfColorBoxes; i++) {
      const colorBox = document.createElement("div");
      colorBox.classList.add("colorBox");
      bgAnimation.append(colorBox);
    }
  }, []);

  return (
    <div className="yolo-container">
      {/* Background Animation Grid */}
      <div className="yolo-grid" id="yoloGrid"></div>

      <div className="yolo-content">
        {/* Information Section */}
        <div className="yolo-text">
          <h2 className="yolo-title">What is YOLO?</h2>
          <p className="yolo-description">
            YOLO (You Only Look Once) is a real-time object detection algorithm
            that predicts bounding boxes and class probabilities in a single
            evaluation. It is widely used in applications such as autonomous
            driving, surveillance, and wildlife monitoring.
          </p>
          <h2 className="yolo-title">YOLO Algorithm Evolution</h2>
          <p className="yolo-description">
            Over time, different versions of YOLO have been developed to improve
            accuracy and speed. Below is a comparison of YOLO v5, v6, v7 and v8.
          </p>
        </div>

        {/* Graphical Comparison Section (Image) */}
        <div className="yolo-image">
          <img src={process.env.PUBLIC_URL + "/imgs/slide3.png"} alt="YOLO Comparison" className="graph-img" />
        </div>
      </div>
    </div>
  );
};

export default AboutYOLO;
