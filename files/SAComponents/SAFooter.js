import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const SAFooter = () => {
  return (
    <footer className="footer">
      <h3>विवाह स्थळ</h3>
      <div className="map">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/place/Gaikwadwadi,+Maharashtra/@17.4952184,74.1957924,13.93z/data=!4m6!3m5!1s0x3bc22b4b03f8155b:0x263c77e3d58e9bd3!8m2!3d17.4810783!4d74.2149978!16s%2Fg%2F12hsf0vp8?entry=ttu"
          width="300"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"></iframe>
      </div>
      <div className="contact">
        <div>
          <FaPhone className="icon" />
          <p>Phone: +91 7889361902</p>
        </div>
        {/* <a href="https://api.whatsapp.com/send?phone=7889361902">
          <i className="fab fa-whatsapp"><p>Whatsapp</p></i>
        </a> */}
        <div>
          <FaMapMarkerAlt className="icon" />
          <p>Address: Gaikwadwadi, Maharashtra</p>
        </div>
      </div>
    </footer>
  );
};

export default SAFooter;
