import React from "react";
import './ImageGenerator.css';
import default_img from '../../assets/default_img.jpg';


const ImageGenerator = () => {
return(
    <div className="ai-image-generator">
        <div className="header">Ai image <span>generator</span></div>
        <div className="img-loading">
            <div className="image"><img src={default_img} alt="deafult" /></div>
        </div>
    </div>
);
};

export default ImageGenerator
