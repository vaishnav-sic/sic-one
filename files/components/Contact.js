import React, { useState } from "react";
import BlockTitle from "./BlockTitle";
import ContactBgShape from "../assets/images/shapes/contact-bg-shape-1-1.png";
import ContactImage from "../assets/images/resources/contact-1-1.jpg";
import TrophyImage from "../assets/images/SIC_Logo.svg";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowPopup(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    });

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="contact-one" id="enquire">
      <img src={ContactBgShape} className="contact-one__bg-shape-1" alt="" />
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <form
              onSubmit={handleSubmit}
              className="contact-form-validated contact-one__form">
              <BlockTitle
                textAlign="left"
                paraText="Contact Now"
                titleText={`Have Question? Write \n a Message`}
              />
              <div className="row">
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-lg-12">
                  <textarea
                    placeholder="Write Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}></textarea>
                </div>
                <div className="col-lg-12 text-left">
                  <button type="submit" className="thm-btn contact-one__btn">
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </form>
            <div className="result"></div>

            {/* Pop-up */}
            {showPopup && (
              <div className="popup">
                <p>We will get back to you shortly.</p>
                <img src={TrophyImage} alt="Trophy" className="trophy-image" />
                <div className="green-line"></div>
              </div>
            )}
          </div>
          <div
            className="col-lg-5 d-flex wow fadeInRight"
            data-wow-duration="1500ms">
            <div className="my-auto">
              <div className="contact-one__image">
                <img src={ContactImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
