import React from "react";
import wedding1 from "../assets/images/SAimages/pre1.jpg"
import wedding2 from "../assets/images/SAimages/pre.jpg"
import wedding3 from "../assets/images/SAimages/pre3.jpg"
import wedding4 from "../assets/images/SAimages/pre4.jpg"
import wedding5 from "../assets/images/SAimages/pre1.jpg"

import wedding6 from "../assets/images/SAimages/pre2.jpeg"
import wedding7 from "../assets/images/SAimages/pre.jpg"
import wedding8 from "../assets/images/SAimages/pre3.jpg"
import wedding9 from "../assets/images/SAimages/pre4.jpg"
import wedding10 from "../assets/images/SAimages/pre.jpg"
import wedding11 from "../assets/images/SAimages/pre1.jpg"
import wedding12 from "../assets/images/SAimages/pre2.jpeg"


const Gallery = () => {
  return (

    <div class="gallery">
    <div class="gallery-item">
      <img src={wedding1} alt="Image 1"/>
    </div>
    <div class="gallery-item">
      <img src={wedding2} alt="Image 2"/>
    </div>
    <div class="gallery-item">
      <img src={wedding3} alt="Image 3"/>
    </div>

    <div class="gallery-item">
      <img src={wedding4} alt="Image 1"/>
    </div>
    <div class="gallery-item">
      <img src={wedding5} alt="Image 2"/>
    </div>
    <div class="gallery-item">
      <img src={wedding6} alt="Image 3"/>
    </div>

    <div class="gallery-item">
      <img src={wedding7} alt="Image 1"/>
    </div>
    <div class="gallery-item">
      <img src={wedding8} alt="Image 2"/>
    </div>
    <div class="gallery-item">
      <img src={wedding9} alt="Image 3"/>
    </div>

    <div class="gallery-item">
      <img src={wedding10} alt="Image 3"/>
    </div>
    <div class="gallery-item">
      <img src={wedding10} alt="Image 3"/>
    </div>
    <div class="gallery-item">
      <img src={wedding11} alt="Image 3"/>
    </div>
  </div>










  );
};

export default Gallery;
