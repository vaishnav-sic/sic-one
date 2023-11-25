import React from "react";
import BlockTitle from "./BlockTitle";

import CtaShape1 from "../assets/images/shapes/cta-1-shape-1.png";
import CtaShape2 from "../assets/images/shapes/cta-1-shape-2.png";
import CtaMoc1 from "../assets/images/resources/CodingLaptop.png";

const CTAOne = () => {
  return (
    <section className="cta-one">
      <img src={CtaShape1} className="cta-one__bg-shape-1" alt="" />
      <img src={CtaShape2} className="cta-one__bg-shape-2" alt="" />
      <div className="container">
        <div className="cta-one__moc wow fadeInLeft" data-wow-duration="1500ms">
          <img src={CtaMoc1} className="cta-one__moc-img" alt="" />
        </div>
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="cta-one__content">
              <BlockTitle
                textAlign="left"
                paraText="Best Application"
                titleText={`Get 100% Ready \n For Coding Interviews`}
              />
              <div className="cta-one__text">
                <p>
                  Master Full Stack Web Development <br />
                  Acquire Essential Skills for Today's Industry Excellence!
                </p>
              </div>
              <ul className="list-unstyled cta-one__list">
                <li>
                  <i className="fa fa-check-circle"></i>
                  Guaranteed Support for Successful Job Placement
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Multiple Real-Time projects and Hands-on Internships
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Endless Mock Interviews with Expert Guidance
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Sharpen Your Problem-Solving Instincts!
                </li>
              </ul>
              <a href="#" className="thm-btn cta-one__btn">
                <span>Discover More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAOne;
