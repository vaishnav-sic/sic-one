import React from "react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import FooterLogo from "../assets/images/SIC_LogoName.svg";

const Footer = () => {
  return (
    <div>
      <section className="mailchimp-one">
        <div className="container wow fadeInUp">
          <div className="inner-container">
            <div className="mailchimp-one__icon">
              <i className="apton-icon-mail"></i>
            </div>
            <form action="#" className="mailchimp-one__form">
              <div className="center-text1">
                <h4>Seeking In-Depth Information?</h4>
              </div>
              <a href="/#enquire" className="thm-btn banner-one__btn">
                <span>Dive In!</span>
              </a>
            </form>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widget footer-widget__about">
                  <a href="index.html">
                    <img src={FooterLogo} width="129" alt="" />
                  </a>
                  <p>
                    SWASAMVEDYA INTELLIGENCE CENTRE <br /> makes you 100% Job
                    ready
                    <br /> We also provide Training, Internships,
                    <br /> and complete Solutions.
                  </p>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="footer-widget__links-wrap">
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Training</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/#features">Features</Link>
                      </li>
                      <li>
                        <Link href="/#speciality">Speciality</Link>
                      </li>
                      {/* <li>
                        <a href="#">Services</a>
                      </li> */}
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Explore</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <Link href="/internship">Internships</Link>
                      </li>
                      <li>
                        <Link href="/solution">Solutions</Link>
                      </li>
                      <li>
                        <Link href="/#syllabus">Syllabus</Link>
                      </li>
                      {/* <li>
                        <a href="#">Free Trial</a>
                      </li> */}
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Links</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <Link href="/internship#internshipsyllabus">
                          Python
                        </Link>
                      </li>
                      <li>
                        <Link href="/#enquire">Enquire</Link>
                      </li>
                      <li>
                        <a href="#">Terms</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center">
                <div className="footer-widget">
                  <div className="footer-widget__social">
                    <a href="https://api.whatsapp.com/send?phone=918381036632">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://in.linkedin.com/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://instagram.com/sic.swasamvedya?igshid=MzMyNGUyNmU2YQ==">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="www.google.com">
                      <i className="fab fa-google"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container text-center">
            <p>© सर्वहक्कस्वाधीन २०२३ स्वसंवेद्य इंटेलिजन्स सेंटर </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
