import React from "react";
import FooterLogo from "../assets/images/SIC_LogoName.svg";

const WeddingFooter = () => {
    return (
        <div className="site-footer__bottom">
          <div className="container text-center">
          <img src={FooterLogo} width="129" alt="" />
          <p>© सर्वहक्कस्वाधीन २०२३ स्वसंवेद्य इंटेलिजन्स सेंटर </p>  
          </div>
        </div>
    );
};
export default WeddingFooter;