import React, { useRef, useState } from "react";
import './ImageGenerator.css';
import default_img from '../../assets/default_img.svg';


const ImageGenerator = () => {
    const [image_url , setImage_url] =useState("/");
    let inputRef =useRef(null);

    const ImageGenerator =async () => {
        if (inputRef.current.value==="") {
            return 0;
        }
        const response = await fetch (
            
        )
    }
return(
    <div className="ai-image-generator">
        <div className="header">Ai image <span>generator</span></div>
        <div className="img-loading">
            <div className="image"><img src={imgage_url==="/"?default_image:image_url} alt="deafult" /></div>
        </div>
        <div className="search-box">
            <input type="text" ref={inputRef} className="search-input"placeholder="Desscribe what yoy want to see" />  
            <div className="generate-btn">Generate</div> 
             </div>
    </div>
);
};

export default ImageGenerator
