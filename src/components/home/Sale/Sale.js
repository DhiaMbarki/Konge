import React from "react";
import './Sales.css'
import image from '../../../assets/images/368003341_682331940583564_1191949525626757568_n.jpg'

const Sale = () => {
  return (
    <div className="image-container">
    <div className="image-wrapper">
        <div className="image-content">
        <img src={image} alt="Logo" />  
            <div className="image-title">Title 1</div>
        </div>
    </div>
    <div className="image-wrapper">
        <div className="image-content">
        <img src={image} alt="Logo" />  
            <div className="image-title">Title 2</div>
        </div>
    </div>
    <div className="image-wrapper">
        <div className="image-content">
        <img src={image} alt="Logo" />  
            <div className="image-title">Title 3</div>
        </div>
    </div>
    <div className="image-wrapper">
        <div className="image-content">
        <img src={image} alt="Logo" />  
            <div className="image-title">Title 4</div>
        </div>
    </div>
</div>
  );
};

export default Sale;
