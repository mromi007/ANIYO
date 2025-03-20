import React, { useState, useCallback, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { ModelContext } from './detection/context/model-context';
import Selector from './detection/utils/Selector';
import LoadingSpinner from './detection/utils/LoadingSpinner';
import "./Detect.css"; // Import new CSS

const MODEL_URL = process.env.PUBLIC_URL + '/detection/';
const LABELS_URL = MODEL_URL + 'labels.json';
const MODEL_JSON = MODEL_URL + 'model.json';

const Detect = () => {
  const [model, setModel] = useState(null);
  const [labels, setLabels] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState('');

  const fetchModel = useCallback((model) => {
    setModel(model);
  }, []);

  const fetchLabels = useCallback((labels) => {
    setLabels(labels);
  }, []);

  const selectMode = useCallback((selected) => {
    setSelected(selected);
  }, []);

  const loadModel = async () => {
    setLoading(true);
    const savedModel = localStorage.getItem('animal_detector');
    const savedLabels = localStorage.getItem('animal_detector_labels');

    if (savedModel && savedLabels) {
      const model = await tf.loadGraphModel('indexeddb://animal_detector');
      let labels_json = JSON.parse(savedLabels);
      fetchModel(model);
      fetchLabels(labels_json);
      console.log("Saved animal detector found");
    } else {
      const model = await tf.loadGraphModel(MODEL_JSON);
      fetchModel(model);
      const response = await fetch(LABELS_URL);
      let labels_json = await response.json();
      fetchLabels(labels_json);
      localStorage.setItem('animal_detector', true);
      model.save('indexeddb://animal_detector');
      localStorage.setItem('animal_detector_labels', JSON.stringify(labels_json));
    }
    setLoading(false);
  };

  useEffect(() => {
    const bgAnimation = document.getElementById("detectGrid");
    const numberOfColorBoxes = 400;

    for (let i = 0; i < numberOfColorBoxes; i++) {
      const colorBox = document.createElement("div");
      colorBox.classList.add("colorBox");
      bgAnimation.append(colorBox);
    }
  }, []);

  return (
    <ModelContext.Provider
      value={{
        model,
        fetchModel,
        labels,
        fetchLabels,
        selected,
        selectMode
      }}
    >
      <div className="detect-container">
        <div className="detect-grid" id="detectGrid"></div>

        <div className="detect-content">
          <h1 className="detect-title">Real-Time Animal Detection Using YOLO ALgorithms</h1>
          <p className="detect-description">
            Using YOLO models, our system detects and classifies animals in real-time.
          </p>

          <div className="detect-box">
            {model ? (
              <Selector />
            ) : (
              <div className="load-box">
                {loading ? (
                  <div className="loading-message">
                    <LoadingSpinner />
                    <p>Loading Model... Please wait.</p>
                  </div>
                ) : (
                  <button className="load-btn" onClick={loadModel}>
                    <span>Load Model</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </ModelContext.Provider>
  );
};

export default Detect;
