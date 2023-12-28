import React, { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import backgroundImage from "../assets/images/SAImages/SAImg15.jpeg";

// import useSound from "use-sound";
const SACounter = () => {
  const weddingDate = new Date("2024-01-03T12:00:00");
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  // const [play] = useSound(
  //   "../SAComponents/music/Shehnai.mp3",
  //   {
  //     volume: 1.0,
  //     autoplay: true,
  //   },
  //   []
  // );

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = weddingDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`,
    // backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover", // You can adjust this based on your preferences
    backgroundPosition: "top",
  };

  return (
    <div className="counter" style={backgroundStyle}>
      {/* <button onClick={play}>Audio</button> */}

      {/* <AudioPlayer /> */}
      {/* <FaRegClock className="icon" /> */}
      <h3>आतुरता लग्नाची..।।</h3>
      <div className="timer">
        <div>
          <button className="button-40" role="button">
            <span className="text">{timeRemaining.days}</span>
          </button>
          <p>Days</p>
        </div>
        <div>
          <button className="button-40" role="button">
            <span className="text">{timeRemaining.hours}</span>
          </button>
          <p>Hours</p>
        </div>
        <div>
          <button className="button-40" role="button">
            <span className="text">{timeRemaining.minutes}</span>
          </button>
          <p>Minutes</p>
        </div>
        <div>
          <button className="button-40" role="button">
            <span className="text">{timeRemaining.seconds}</span>
          </button>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default SACounter;
