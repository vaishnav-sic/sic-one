import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const SAFooter = () => {
  return (
    <footer className="footer">
      <div className="contact">
        <div>
          <FaPhone className="icon" />
          <p>Phone: +91 9999999999</p>
        </div>
        <div>
          <FaEnvelope className="icon" />
          <p>Email: example@example.com</p>
        </div>
        <div>
          <FaMapMarkerAlt className="icon" />
          <p>Address: Satara, Maharashtra</p>
        </div>
      </div>
      <div className="map">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.1118239107516!2d73.9977194153937!3d17.673104988156697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1bcbc69557a79%3A0xdfc2a3e2b1ed0ca4!2sSatara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1666487039545!5m2!1sen!2sin"
          width="300"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"></iframe>
      </div>
    </footer>
  );
};

export default SAFooter;
