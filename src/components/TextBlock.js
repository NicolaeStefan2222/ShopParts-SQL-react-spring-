import React from 'react';
import './TextBlock.css';


function TextBlock(props) {
    return (
        <div className="text-block">
            <div className="text-block-content">
                <h3 className="text-block-title">{props.title}</h3>
                <p className="text-block-description">{props.description}</p>
                <button className="text-block-button">Shop more</button>
            </div>
  
        </div>
        
    );
}

export default TextBlock;