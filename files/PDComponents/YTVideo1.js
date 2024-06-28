import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import videoBG from "../assets/images/SAImages/PD5_bg.jpg";
import YTBlockTitle from "./YTBlockTitle";

const YTVideo = () => {
  const [open, setOpen] = useState({
    isOpen: false,
  });
  const openModal = (e) => {
    e.preventDefault();
    setOpen({
      isOpen: true,
    });
  };
  return (
    <section className="video-one1">
      <div
        id="going"
        className="container-fluid"
        style={{ backgroundImage: `url(${videoBG})` }}>
        <div
          className="video-one__content wow fadeInLeft"
          data-wow-duration="1500ms">
          <YTBlockTitle
            textAlign="left"
            paraText="Wedding Youtube Video"
            titleText={`Watch \n Prewedding Teaser`}
          />
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={open.isOpen}
          videoId="t5hbUPVJga0"
          onClose={() => setOpen({ isOpen: false })}
        />
        <a href="#" onClick={openModal} className="video-one__btn video-popup">
          <i className="fa fa-play"></i>
        </a>
      </div>
    </section>
  );
};
export default YTVideo;