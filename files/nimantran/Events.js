import React from "react";
import kal from "../assets/images/SAImages/Kalash.jpg";

const Events = () => {
  return (
    <div className="evt">
      <h1 className="title1">कार्यक्रम</h1>
      <div className="event-container">
        <div className="event">
          <img src={kal} alt="साखरपुळा" />
          <div className="event-details">
            <h2>साखरपुळा</h2>
            <p> १० जून २०२२</p>
            <p> ५:०० वाजता</p>
            <p> समाज मंदिर, पुणे</p>
          </div>
        </div>

        <div className="event">
          <img src={kal} alt="हळद" />
          <div className="event-details">
            <h2>हळद</h2>
            <p> १२ जून २०२२</p>
            <p> ३:०० वाजता</p>
            <p> श्रीमंत मंगल कार्यालय, पुणे</p>
          </div>
        </div>

        <div className="event">
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
        </div>
      </div>
    </div>
  );
};

export default Events;
