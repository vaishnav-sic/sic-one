import React from "react";
import backgroundImage from "../assets/images/SAImages/m23.jpg";
 
 
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
          <div class="col-md-4 col-sm-12">
            <div class="persons">
              <div class="heading-mid">
              <h1>नाती जन्मोजन्मींची, परमेश्वराने ठरवलेली, दोन जीवांना प्रेमभरल्या रेशीमगाठीत बांधलेली… लग्नाच्या हार्दिक शुभेच्छा..!!
</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Shubheccha;