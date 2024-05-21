import React from "react";
import './Year.css'
import image from '../../../assets/images/368003341_682331940583564_1191949525626757568_n.jpg'

const YearProduct = () => {
  return (
    <div className="slideshow">
    <div className="slides">
        <div className="slide"><img src={image} alt="Image 1"/></div>
        <div className="slide"><img src={image} alt="Image 2"/></div>
        <div className="slide"><img src={image} alt="Image 3"/></div>
        <div className="slide"><img src={image} alt="Image 4"/></div>
    </div>
</div>
  );
};

export default YearProduct;
