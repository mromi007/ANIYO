import React, { useContext } from 'react';
import { ModelContext } from '../context/model-context';
import Detection from '../image/Detection';
import Video from '../video/Video';
import Realtime from '../realtime/Realtime';
import './Selector.css';

const Selector = () => {
    const { selected, selectMode } = useContext(ModelContext);

    return (
        <div className="selector-container">
            {/* Mode Selection Buttons */}
            <div className="selector-buttons">
                <button 
                    className={selected === 'Image' ? "selector-btn active" : "selector-btn"} 
                    onClick={() => selectMode('Image')}
                >
                    Upload Image
                </button>
                <button 
                    className={selected === 'Video' ? "selector-btn active" : "selector-btn"} 
                    onClick={() => selectMode('Video')}
                >
                    Upload Video
                </button>
                <button 
                    className={selected === 'Realtime' ? "selector-btn active" : "selector-btn"} 
                    onClick={() => selectMode('Realtime')}
                >
                    Open Camera
                </button>
            </div>

            {/* Content Section */}
            <div className="selector-content">
                {selected === 'Image' && <Detection />}
                {selected === 'Video' && <Video />}
                {selected === 'Realtime' && <Realtime />}
            </div>
        </div>
    );
};

export default Selector;
