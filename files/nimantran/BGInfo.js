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
            src="https://s-media-cache-ak0.pinimg.com/736x/5e/eb/e4/5eebe415eeb1ae8e732098404b9592fe.jpg"
            alt="Bride"
          />
          <h2>Bride's Name</h2>
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
            src="https://3.bp.blogspot.com/--zdyT3cyTOs/UknTcjyl34I/AAAAAAAAAPg/FVaxUMfTXUM/s1600/2sk.jpg"
            alt="Groom"
          />
          <h2>Groom's Name</h2>
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
