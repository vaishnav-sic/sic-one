import React from "react";
import Img1 from "../assets/images/SAimages//m 1.jpg";
import Img2 from "../assets/images/SAimages/m27.jpg";
import Img3 from "../assets/images/SAimages/m33.jpg";
import Img4 from "../assets/images/SAimages/m14.jpg";
import Img5 from "../assets/images/SAimages/m34.jpg";

import Img6 from "../assets/images/SAimages/m36.jpg";
import Img7 from "../assets/images/SAimages/m9.jpg";
import Img8 from "../assets/images/SAimages/m17.jpg";
import Img9 from "../assets/images/SAimages/m23.jpg";
import Img10 from "../assets/images/SAimages/m29.jpg";
import Img11 from "../assets/images/SAimages/m9.jpg";
import Img12 from "../assets/images/SAimages/m37.jpg";

const Gallery = () => {
  return (
    <div class="gallery">
      <div class="gallery-item">
        <img src={Img1} alt="Image 1" />
      </div>
      <div class="gallery-item">
        <img src={Img2} alt="Image 2" />
      </div>
      <div class="gallery-item">
        <img src={Img3} alt="Image 3" />
      </div>

      <div class="gallery-item">
        <img src={Img4} alt="Image 4" />
      </div>
      <div class="gallery-item">
        <img src={Img5} alt="Image 5" />
      </div>
      <div class="gallery-item">
        <img src={Img6} alt="Image 6" />
      </div>

      <div class="gallery-item">
        <img src={Img7} alt="Image 7" />
      </div>
      <div class="gallery-item">
        <img src={Img8} alt="Image 8" />
      </div>
      <div class="gallery-item">
        <img src={Img9} alt="Image 9" />
      </div>

      <div class="gallery-item">
        <img src={Img10} alt="Image 10" />
      </div>
      <div class="gallery-item">
        <img src={Img11} alt="Image 11" />
      </div>
      <div class="gallery-item">
        <img src={Img12} alt="Image 12" />
      </div>
    </div>
  );
};

export default Gallery;
