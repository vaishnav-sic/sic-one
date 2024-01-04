import React from "react";
import SAImg1 from "../assets/images/SAimages/SAImg1.jpeg";
import SAImg2 from "../assets/images/SAimages/SAImg2.jpg";
import SAImg3 from "../assets/images/SAimages/SAImg3.jpg";
import SAImg4 from "../assets/images/SAimages/SAImg4.jpeg";
import SAImg5 from "../assets/images/SAimages/SAImg5.jpg";

import SAImg6 from "../assets/images/SAimages/SAImg6.jpg";
import SAImg7 from "../assets/images/SAimages/SAImg7.jpg";
import SAImg8 from "../assets/images/SAimages/SAImg8.jpg";
import SAImg9 from "../assets/images/SAimages/SAImg9.jpg";
import SAImg10 from "../assets/images/SAimages/SAImg10.jpg";
import SAImg11 from "../assets/images/SAimages/SAImg11.jpeg";
import SAImg12 from "../assets/images/SAimages/SAImg12.jpg";

const Gallery = () => {
  return (
    <div class="gallery">
      <div class="gallery-item">
        <img src={SAImg1} alt="Image 1" />
      </div>
      <div class="gallery-item">
        <img src={SAImg2} alt="Image 2" />
      </div>
      <div class="gallery-item">
        <img src={SAImg3} alt="Image 3" />
      </div>

      <div class="gallery-item">
        <img src={SAImg4} alt="Image 1" />
      </div>
      <div class="gallery-item">
        <img src={SAImg5} alt="Image 2" />
      </div>
      <div class="gallery-item">
        <img src={SAImg6} alt="Image 3" />
      </div>

      <div class="gallery-item">
        <img src={SAImg7} alt="Image 1" />
      </div>
      <div class="gallery-item">
        <img src={SAImg8} alt="Image 2" />
      </div>
      <div class="gallery-item">
        <img src={SAImg9} alt="Image 3" />
      </div>

      <div class="gallery-item">
        <img src={SAImg10} alt="Image 3" />
      </div>
      <div class="gallery-item">
        <img src={SAImg11} alt="Image 3" />
      </div>
      <div class="gallery-item">
        <img src={SAImg12} alt="Image 3" />
      </div>
    </div>
  );
};

export default Gallery;
