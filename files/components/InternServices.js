import React from "react";
import BlockTitle from "./BlockTitle";

const InternServices = () => {
  return (
    <section className="service-one" id="features">
      <div className="container">
        <BlockTitle
          textAlign="center"
          paraText="Feature List"
          titleText={`with Swasamvedya Intelligence \n Get 100% Job Ready`}
        />
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-computer-graphic"></i>
                </div>
                <h3>Internship Certificate</h3>
                <p>The certificate recognizing an intern's successful completion</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-development"></i>
                </div>
                <h3>Conceptual Journey</h3>
                <p>Zero to Hero Grasp on Concepts with Industry Expert Guidance</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-development1"></i>
                </div>
                <h3>Coding Challenges</h3>
                <p>50+ Comprehensive Coding Challenges to enhance your programming skills </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <i className="apton-icon-responsive"></i>
                </div>
                <h3>Real Time Experience</h3>
                <p>Experience on 10+ projects for practical skill development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternServices;
