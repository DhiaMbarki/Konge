import React from "react";
import './Sales.css'
import image1 from '../../../assets/images/1.jpg'
import image2 from '../../../assets/images/2.jpg'
import image3 from '../../../assets/images/3.png'
import image4 from '../../../assets/images/4.jpg'

const Sale = () => {
  return (
    <div className="image-container">
    <div className="image-wrapper">
        <div className="image-content">
        <img src={image1} alt="Logo" />  
            <div className="image-title">MASS GAINER</div>
        </div>
    </div>
    <div className="image-wrapper">
        <div className="image-content">
        <img src={image2} alt="Logo" />  
            <div className="image-title">WHEY PROTEIN</div>
        </div>
    </div>
    <div className="image-wrapper">
        <div className="image-content">
        <img src={image3} alt="Logo" />  
            <div className="image-title">CREATINE</div>
        </div>
    </div>
    <div className="image-wrapper">
        <div className="image-content">
        <img src={image4} alt="Logo" />  
            <div className="image-title">VITAMIN</div>
        </div>
    </div>
</div>
  );
};

export default Sale;
