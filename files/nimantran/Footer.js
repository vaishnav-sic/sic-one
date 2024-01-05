import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const SAFooter = () => {
  return (
    <footer className="footer">
      <h3>...विवाह स्थळ...</h3>
      <div className="map">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241662.16175808158!2d73.80454753848366!3d18.84394489079891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd2e082b057405%3A0x6194ea41ebffcc79!2sMorya%20Garden%20Mangal%20Karyalaya!5e0!3m2!1sen!2sin!4v1704392840592!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" referrerPolicy="no-referrer-when-downgrade"
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
          <p>Address: मोरया गार्डन मंगल कार्यालय मेंगडेवाडी निरगुडसर फाटा ता. आंबेगाव , जि. पुणे</p>
        </div>
      </div>
    </footer>
  );
};

export default SAFooter;
