import React, { useState } from "react";
import BlockTitle from "./BlockTitle";
import ContactBgShape from "../assets/images/shapes/contact-bg-shape-1-1.png";
import ContactImage from "../assets/images/resources/contact-1-1.jpg";
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
 
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    graduation: "",
    passoutYear: "",
    message: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("message sent ")
 
    try {
      const docRef = await addDoc(collection(db, "EnquiryForm"), formData);
     
 
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        graduation: "",
        passoutYear: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
 
  return (
    <section className="contact-one" id="enquire">
      <img src={ContactBgShape} className="contact-one__bg-shape-1" alt="" />
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <form
              className="contact-form-validated contact-one__form"
              onSubmit={handleSubmit}>
              <BlockTitle
                textAlign="left"
                paraText="Contact Now"
                titleText={`Have Question? Write \n a Message`}
              />
              <div className="row">
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    email
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    
                  />
                </div>
                <div className="col-lg-6">
                  {/* <input
                    type="text"
                    placeholder="Graduation in"
                    name="graduation"
                    value={formData.graduation}
                    onChange={handleChange}
                  /> */}
                  <select
                  required
                    name="graduation"
                    onChange={handleChange}
                     placeholder="Graduation"
                  >
                    <option defaultValue="" selected>Graduation in</option>
                    <option value= "BE(CS & IT)">BE (CS & IT)</option>
                    <option value= "BE(Other)">  BE(Other) </option>
                    <option value= "BCA">BCA</option>
                    <option value= "MCA">MCA</option>
                    <option value= "BCS">BCS</option>
                    <option value= "MCS">MCS</option>
                    <option value= "BSC">BSC</option>
                    <option value= "Other">other</option>
                    
                  </select>
                </div>
                <div className="col-lg-6">
                  {/* <input
                    type="text"
                    placeholder="Passout year"
                    name="passoutYear"
                    value={formData.passoutYear}
                    onChange={handleChange}
                  /> */}

                  <select
                    name="passoutYear"
                    onChange={handleChange}
                     
                  >
                    <option defaultValue="" selected>Passout Year</option>
                    <option value= {2019}>2019</option>
                    <option value= {2020}>2020</option>
                    <option value= {2021}>2021</option>
                    <option value= {2022}>2022</option>
                    <option value= {2023}>2023</option>
                    <option value= {2024}>2024</option>
                    <option value= {2015}>2025</option>
                    <option value= {2016}>2026</option>
                    <option value= "other">other</option>
                    
                  </select>
                  
                </div>
                <div className="col-lg-12">
                  <textarea
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}></textarea>
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