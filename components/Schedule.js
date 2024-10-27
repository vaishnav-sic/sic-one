import React from "react";
import BlockTitle from "./BlockTitle";

import CtaShape1 from "../assets/images/shapes/cta-1-shape-1.png";
import CtaShape2 from "../assets/images/shapes/cta-1-shape-2.png";
import CtaMoc1 from "../assets/images/resources/Schedule.png";

const Schedule = () => {
  return (
    <section className="cta-one" id="speciality">
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
                paraText="Schedule"
                titleText={`Practical Based Learnings on Industry trends experience`}
              />
              <div className="cta-one__text">
                <p>
                  Live classes 1 Hr per day.
                  <br />
                  Evaluation using google classroom
                </p>
              </div>
              <ul className="list-unstyled cta-one__list">
                <li>
                  <span className="highlight">
                    <strong style={{ color: "red" }}>
                      <i className="fa fa-check-circle"></i>
                      &nbsp;&nbsp;PHASE 1 :
                    </strong>
                  </span>
                  <span className="highlight">
                    10 days learning 10 days for revision, projects and
                    submissions
                  </span>
                </li>
                <br />
                <li>
                  <span className="highlight">
                    <strong style={{ color: "red" }}>
                      <i className="fa fa-check-circle"></i>
                      &nbsp;&nbsp;PHASE 2 :
                    </strong>
                  </span>
                  <span className="highlight">
                    5 days learning 5 days for revision, projects and
                    submissions
                  </span>
                </li>
                <br />
                <li>
                  <span className="highlight">
                    <strong style={{ color: "red" }}>
                      <i className="fa fa-check-circle"></i>
                      &nbsp;&nbsp;PHASE 3 :
                    </strong>
                  </span>
                  <span className="highlight">
                    5 days Revision 5 days final project submissions and
                    evaluations
                  </span>
                </li>
                <br />
                <li>
                  <span className="highlight">
                    <strong style={{ color: "red" }}>
                      <i className="fa fa-check-circle"></i>
                      &nbsp;&nbsp;TOTAL :
                    </strong>
                  </span>
                  <span className="highlight"> 2 Months</span>
                </li>
                <br />
              </ul>
              {/* <a href="#" className="thm-btn cta-one__btn">
                <span>Discover More</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
