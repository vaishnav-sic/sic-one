import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const SAFooter = () => {
  return (
    <footer className="footer">
      <h3>Venue</h3>
      <div className="map">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30334.219590125438!2d74.3269209!3d18.1280657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3a9c30035dbb7%3A0x49f707783cbed6b2!2ssomnath%20palace%20Mangal%20Karyalay!5e0!3m2!1sen!2sin!4v1705395551789!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" referrerPolicy="no-referrer-when-downgrade"
          width="300"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"></iframe>
      </div>
      <div className="contact">
        <div>
          {/* <FaPhone className="icon" /> */}
          {/* <p>Phone: +91 11111111111</p> */}
        </div>
        {/* <a href="https://api.whatsapp.com/send?phone=7889361902">
          <i className="fab fa-whatsapp"><p>Whatsapp</p></i>
        </a> */}
        <div>
          <FaMapMarkerAlt className="icon" />
          <p>Address: Somanth Palace Mangal Karyalay, Sastewadi, Baramati, Pune</p>
        </div>
      </div>
    </footer>
  );
};

export default SAFooter;
