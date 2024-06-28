import React from "react";
import ganesha from "../assets/images/SAImages/ganesha.png";
import backgroundImage from "../assets/images/SAImages/PD1.jpeg";
import SaveTheDate from "../assets/images/SAImages/SaveTheDate.png";

const SATopPage = () => {
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    // backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "40rem", // Adjust the height as needed
  };
  const fadeInAnimation = {
    animation: "fadeIn 2s ease-in-out", // You can adjust the duration and timing function
  };

  return (
    <section
      section-scroll="1"
      className="about_area section section-one"
      style={containerStyle}>
      <div className="main_container">
            <div class="persons">
              <div class="heading">
                <h6 style={fadeInAnimation}>॥ Shree Ganeshay Namah ॥</h6>
                {/* <div class="ganesh-img">
                  <img src={ganesha} />
                </div> */}
                <div class="head-con">
                <img className="SaveTheDate" src={SaveTheDate} />
                  <h2 style={fadeInAnimation}>Pratik & Dipti  </h2>
                  <h3 style={fadeInAnimation}>28 January 2024</h3>
                </div>
              </div>
            </div>
      </div>
    </section>
  );
};
export default SATopPage;
