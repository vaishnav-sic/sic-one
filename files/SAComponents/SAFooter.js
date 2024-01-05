import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const SAFooter = () => {
  return (
    <footer className="footer">
      <h3>...विवाह स्थळ...</h3>
      <div className="map">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30444.355594855253!2d74.19480522778635!3d17.481504822928244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc22b4b03f8155b%3A0x263c77e3d58e9bd3!2sGaikwadwadi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703315312103!5m2!1sen!2sin" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"
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
          <p>Address: Gaikwadwadi, Satara, Maharashtra</p>
        </div>
      </div>
    </footer>
  );
};

export default SAFooter;
