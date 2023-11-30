import React from "react";
import NavLinks from "./NavLinks";
import CloseBtn from "../assets/images/shapes/close-1-1.png";

const MobileMenu = () => {
  return (
    <div className="side-menu__block">
      <div className="side-menu__block-overlay custom-cursor__overlay">
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
      <div className="side-menu__block-inner ">
        <div className="side-menu__top justify-content-end">
          <a href="#" className="side-menu__toggler side-menu__close-btn">
            <img src={CloseBtn} alt="" />
          </a>
        </div>

        <nav className="mobile-nav__container">
          <NavLinks />
        </nav>
        <div className="side-menu__sep"></div>
        <div className="side-menu__content">
          <p>
            SWASAMVEDYA INTELLIGENCE CENTRE
            SIC
            Know Your SELF
          </p>
          <p>
            <a href="mailto:info@swasamvedya.com">info@swasamvedya.com</a> <br />
            <a href="tel:8381036632">+918381036632</a>
          </p>
          <div className="side-menu__social">
            <a href="https://api.whatsapp.com/send?phone=918381036632">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://in.linkedin.com/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com/sic.swasamvedya?igshid=MzMyNGUyNmU2YQ==">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
