import React, { useEffect } from "react";
import "./AIMusic.css";

const AIMusic = () => {
  useEffect(() => {
    const bgAnimation = document.getElementById("bgAnimation");
    const numberOfColorBoxes = 400;

    for (let i = 0; i < numberOfColorBoxes; i++) {
      const colorBox = document.createElement("div");
      colorBox.classList.add("colorBox");
      bgAnimation.append(colorBox);
    }
  }, []);

  return (
    <div>
      <div className="bgAnimation" id="bgAnimation">
        <div className="backgroundAmim"></div>
      </div>
      <div className="container">
        <nav>
          <h1>
            <span>ANI</span>YO
          </h1>
        </nav>
        <section>
          <div className="textBox">
            <h1>
              <span>Animal </span> Detection System
            </h1>
            <p>
              <span>Spot. Protect. Preserve.</span> AI-Powered Animal Detection
              for a Safer World !
            </p>
            <button className="homeBtn">Detect Animal</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIMusic;
