import React from "react";
import FooterLogo from "../assets/images/SIC_LogoName.svg";

const WeddingFooter = () => {
    return (
        <div className="site-footer__bottom">
          <div className="container text-center">
          <p>© सर्वहक्कस्वाधीन २०२४ स्वसंवेद्य इंटेलिजन्स सेंटर &nbsp;
          <a href="https://www.swasamvedya.com/" target="_blank">
            <img src={FooterLogo} width="159" alt="" /> 
          </a> &nbsp;
            द्वारे प्रेमपूर्वक विकसित  </p>  
          </div>
        </div>
    );
};
export default WeddingFooter;