import React from "react";
import { FaHeart, FaRing } from "react-icons/fa";

const SAHeader = () => {
  return (
    <header className="header">
      <div className="title">
        <FaRing className="icon" />
        <h1>Wedding Card</h1>
        <FaHeart className="icon" />
      </div>
    </header>
  );
};

export default SAHeader;
