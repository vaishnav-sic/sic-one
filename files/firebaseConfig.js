import React, { useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../path/to/firebase-config"; // Replace with the actual path to your Firebase configuration
import BlockTitle from "./BlockTitle";
import ContactBgShape from "../assets/images/shapes/contact-bg-shape-1-1.png";
import ContactImage from "../assets/images/resources/contact-1-1.jpg";

const Contact = () => {
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    try {
      // Add data to Firestore "MyNotes" collection
      const docRef = await addDoc(collection(db, "MyNotes"), formData);
      console.log("Document written with ID: ", docRef.id);

      // Clear form after submission (optional)
      e.target.reset();

      // Fetch and display data after adding a new note
      fetchAndDisplayData();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // Function to fetch data from Firestore
  const fetchAndDisplayData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "MyNotes"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        // Handle data and update your UI (e.g., update state to reflect data on cards)
      });
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchAndDisplayData();
  }, []); // Empty dependency array ensures that it runs only once after the initial render

  return (
    <section className="contact-one">
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
              <div className="row">{/* ... (Your existing form inputs) */}</div>
            </form>
            <div className="result"></div>
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
