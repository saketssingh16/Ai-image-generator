import React from "react";
import './ImageGenerator.css';
import default_img from '../../assets/default_img.svg';


const ImageGenerator = () => {
return(
    <div className="ai-image-generator">
        <div className="header">Ai image <span>generator</span></div>
        <div className="img-loading">
            <div className="image"><img src={default_img} alt="deafult" /></div>
        </div>
        <div className="search-box">
            <input type="text" className="search-input"placeholder="Desscribe what yoy want to see" />  
            <div className="generate-btn">Generate</div> 
             </div>
    </div>
);
};

export default ImageGenerator
