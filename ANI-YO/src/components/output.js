import React from "react";
import "./Output.css"; // Style the output messages

const Output = ({ detections }) => {
  return (
    <div className="output-container">
      <h2>Detection Logs</h2>
      <ul>
        {detections.map((item, index) => (
          <li key={index} className="output-message">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Output;
