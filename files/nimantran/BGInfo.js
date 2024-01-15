import React from "react";

const BGInfo = () => {
  return (
    <div className="wedding-container">
      <h1 className="title1">वर आणि वधू</h1>
      <p className="text">
        या शुभमंगलप्रसंगी आपण उपस्थित राहून वधू – वरास शुभआशीर्वाद द्यावेत,
        यासाठीचे आग्रहाचे निमंत्रण
      </p>

      <div className="photos-container">
        <div className="photo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3KmZe06KzCZqr2xv1t4CRe1hTzTYDtfb6g&usqp=CAU"
            alt="Bride"
          />
          <h2>वधू</h2>
          <p>Little info about the bride</p>
          <div className="social-links">
            <a
              href="bride_social_link"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="groom_social_link"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="photo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3KmZe06KzCZqr2xv1t4CRe1hTzTYDtfb6g&usqp=CAU"
            alt="Groom"
          />
          <h2>वर</h2>
          <p>Little info about the groom</p>
          <div className="social-links">
            <a
              href="bride_social_link"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="groom_social_link"
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
