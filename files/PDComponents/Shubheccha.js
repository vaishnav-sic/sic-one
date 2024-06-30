import React from "react";
import backgroundImage from "../assets/images/SAImages/PD14.jpeg";
 
 
const Shubheccha = () => {
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    // backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "50rem", // Adjust the height as needed
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
        <div class="row">
            <div class="persons">
              <div class="heading-mid myfont" >
              <h1>Together with joy, laughter, and love, we invite you to celebrate our wedding day...!!
</h1>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default Shubheccha;