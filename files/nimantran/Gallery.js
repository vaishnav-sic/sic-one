import React from "react";
import SAImg1 from "../assets/images/SAimages//m 1.jpg";
import SAImg2 from "../assets/images/SAimages/m27.jpg";
import SAImg3 from "../assets/images/SAimages/m33.jpg";
import SAImg4 from "../assets/images/SAimages/m14.jpg";
import SAImg5 from "../assets/images/SAimages/m34.jpg";

import SAImg6 from "../assets/images/SAimages/m36.jpg";
import SAImg7 from "../assets/images/SAimages/m9.jpg";
import SAImg8 from "../assets/images/SAimages/m17.jpg";
import SAImg9 from "../assets/images/SAimages/m23.jpg";
import SAImg10 from "../assets/images/SAimages/m29.jpg";
import SAImg11 from "../assets/images/SAimages/m9.jpg";
import SAImg12 from "../assets/images/SAimages/m37.jpg";

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
