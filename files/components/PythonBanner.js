import React, { useState } from "react";
import ModalVideo from "react-modal-video";

import BannerShape from "../assets/images/shapes/banner-shape-1-1.png";
import BannerBG from "../assets/images/resources/banner-image-1-1.jpg";
import BannerMoc from "../assets/images/resources/Internship.png";

const PythonBanner = () => {
  const [open, setOpen] = useState({
    isOpen: false,
  });

  const openModal = () => {
    setOpen({
      isOpen: true,
    });
    const goElement = document.getElementById("going");
    if (goElement) {
      goElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="banner-one" id="home">
      <img src={BannerShape} className="banner-one__bg-shape-1" alt="" />
      <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${BannerBG})` }}></div>
      <div className="container">
        {/* <ModalVideo
          channel="youtube"
          isOpen={open.isOpen}
          videoId="Kl5B6MBAntI"
          onClose={() => setOpen({ isOpen: false })}
        /> */}
        <div onClick={openModal} className="banner-one__video video-popup">
          <i className="fa fa-play"></i>
        </div>
        <div className="banner-one__moc">
          <img
            src={BannerMoc}
            className="wow fadeInUp"
            data-wow-duration="1500ms"
            alt=""
          />
        </div>
        <div className="whatsapp-icon">
          <a
            href="https://api.whatsapp.com/send?phone=918087144098"
            target="_blank"
            rel="noopener noreferrer">
            <i
              className="fab fa-whatsapp"
              style={{
                fontSize: "30px",
                color: "#25d366",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "50%",
                boxShadow: "5px 4px 6px rgba(0, 0, 0, 1)",
                transition: "background-color 0.3s, box-shadow 0.3s",
              }}></i>
          </a>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-one__content">
              <form
                className="banner-one__mc-form mc-form"
                data-url="MAILCHIMP__POPUP__FORM__URL">
                <div className="center-text">
                  <h5>Seeking In-Depth Information?</h5>
                </div>
                <a href="/#enquire" className="thm-btn banner-one__btn">
                  <span>Dive In!</span>
                </a>
              </form>
              <div className="mc-form__response"></div>
              <h3>
                Python <div className="red-text">Powerhouse</div>
              </h3>
              <p>Your Journey to Coding Excellence</p>
              <a href="#" className="thm-btn banner-one__btn">
                <span>Discover More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PythonBanner;
