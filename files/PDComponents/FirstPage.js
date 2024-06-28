import React from "react";
import sec from "../assets/images/SAImages/sec.png";
import Img from "../assets/images/SAImages/PD1.jpeg";

const SAFirstPage = () => {
  return (
    <section section-scroll="3" class="event-area section section-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="section-heading">
              <h2 style={{ animation: "slideInDown 1s ease-in-out" }}>
                शुभ विवाह
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <div
              className="events"
              style={{ animation: "slideInLeft 1s ease-in-out" }}>
              <h2>हळदी समारंभ</h2>
              <h5>
                शनिवार दि. 06/01/2024 <br />
                रोजी स. 11.00 ते 01.00 वा.
              </h5>
              <h4>विवाह स्थळी  </h4>
              <p>
                हळद समारंभ या सोहळ्याचा रंग पिवळा....सोन्यासारखा जीवन "सोनेरी"
                होण्यासाठीचा सोहळा....
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div
              className="event-img"
              style={{ animation: "slideInRight 1s ease-in-out" }}>
              <figure>
                <img src={Img} />
              </figure>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div
              class="events"
              style={{ animation: "slideInRight 1s ease-in-out" }}>
              <h2>विवाह मुहूर्त</h2>
              <h5>
                शनिवार दि. 06/01/2024 रोजी <br /> सायंकाळी 04.31 मि.
              </h5>
              <h4>मोरया गार्डन मंगल कार्यालय मेंगडेवाडी निरगुडसर फाटा, ता-आंबेगाव, जि-पुणे   </h4>
              <p>
              हे बंध रेशमाचे एका नात्यात गुंफलेले लग्न, संसार आणि जबाबदारीने फुललेले, 
              सात सप्तपदिंनी बांधलेले हे बंधन, जन्मभर राहो असंच कायम.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SAFirstPage;
