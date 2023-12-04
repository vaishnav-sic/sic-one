import React, { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";

const SACounter = () => {
  const weddingDate = new Date("2023-12-12T18:00:00");
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

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

  return (
    <div className="counter">
      <FaRegClock className="icon" />
      <div className="timer">
        <div>
          <span>{timeRemaining.days}</span>
          <p>Days</p>
        </div>
        <div>
          <span>{timeRemaining.hours}</span>
          <p>Hours</p>
        </div>
        <div>
          <span>{timeRemaining.minutes}</span>
          <p>Minutes</p>
        </div>
        <div>
          <span>{timeRemaining.seconds}</span>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default SACounter;
