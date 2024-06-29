import React from "react";
import Haldi from "../assets/images/SAImages/Haldi.png";
import Wedding from "../assets/images/SAImages/Wedding.png";

const Events = () => {
  return (
    <div className="evt">
      <h1 className="title">Events</h1>
      <div className="event-container">
        <div className="event">
          <img src={Haldi} alt="हळद" />
          <div className="event-details">
            <h2>Haldi Ceremony</h2>
            <p> 28 January 2024</p>
            <p> 10:00 am</p>
            <p> At Venue</p>
          </div>
        </div>

        <div className="event">
          <img src={Wedding} alt="लग्न" />
          <div className="event-details">
          <h2>Wedding Ceremony</h2>
            <p> 28 January 2024</p>
            <p> 12:47 pm</p>
            <p> At Venue</p>
          </div>
        </div>

        {/* <div className="event">
          <img src={kal} alt="लग्न" />
          <div className="event-details">
            <h2>लग्न</h2>
            <p> १५ जून २०२२</p>
            <p> ८:०० वाजता</p>
            <p> श्रीमंत भोळे व्रुंदावन हॉल, पुणे</p>
          </div>
        </div>

        <div className="event">
          <img src={kal} alt="स्वागत समारोह" />
          <div className="event-details">
            <h2>स्वागत समारोह</h2>
            <p> १७ जून २०२२</p>
            <p> १०:०० वाजता</p>
            <p> समाज भवन, पुणे</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Events;