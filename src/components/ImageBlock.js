import React from 'react';
import './ImageBlock.css';


function ImageBlock(props) {
    let className='image-block ';
    if(props.className){
        className=className+props.className;
    }
    
    return (
        <div className={className}>
            <div className="image-block-container-wrapper">
                <img className="image-block-container"
                    src={props.imgSrc} alt="discs" />
            </div>
            <div className="image-block-content">
            <h6 className="image-block-title">{props.titlu}</h6>
                <a className="image-block-link" href="/">Buy more</a>
            </div>
           
        </div>
    );
}

export default ImageBlock;