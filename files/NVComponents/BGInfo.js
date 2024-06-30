import React from "react";
import Img1 from "../assets/images/SAimages/Dipti.jpg";
import Img2 from "../assets/images/SAimages/Pratik.jpeg";

const BGInfo = () => {
  const fadeInLeftAnimation = {
    animation: "fadeInLeftBig 2s ease-in-out", // You can adjust the duration and timing function
  };

  const fadeInRightAnimation = {
    animation: "fadeInRightBig 2s ease-in-out", // You can adjust the duration and timing function
  };

  return (
    <div className="wedding-container">
      <h1 className="title1">Groom and Bride</h1>
      <p className="text">
      Join us for the magic of love! Be there to witness the union and 
      shower blessings amidst the blossoming beauty of a flower-filled celebration!
      </p>

      <div className="photos-container">
        
        <div className="photo">
          <img
            src={Img2}
            alt="Groom"
            style={fadeInLeftAnimation}
          />
          <h2>Groom</h2>
          <p>He’s a Software Engineer II at Tekion, Bangalore</p>
          <div className="social-links">
            {/* <a
              href="bride_social_link"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a> */}
            <a
              href="https://www.instagram.com/pratik.shinde_?igsh=MW1hcGdrb2llNXJ1cw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="photo">
          <img
            src={Img1}
            alt="Bride"
            style={fadeInRightAnimation}
          />
          <h2>Bride</h2>
          <p>She’s a Software Engineer at Quickheal, Pune</p>
          <div className="social-links">
            {/* <a
              href="bride_social_link"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a> */}
            <a
              href="https://www.instagram.com/d.i.p.t.i.25?igsh=MXNob2I4aWd1ajJ3cg=="
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BGInfo;