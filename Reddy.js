import React, { useState } from "react";
import "./Reddy.css";

const Reddy = ({ number }) => {
  const [showPopOver, setShowPopOver] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({});

  const handleMouseEnter = (event) => {
    const boxPosition = event.target.getBoundingClientRect();

    const popoverPosition = {
      top: boxPosition.top - 60,
      left: boxPosition.left + boxPosition.width / 2,
    };

    if (popoverPosition.top < 0) {
      popoverPosition.top = 0;
    }

    if (popoverPosition.left < 0) {
      popoverPosition.left = 0;
    }

    if (popoverPosition.left + 100 > window.innerWidth) {
      popoverPosition.left = window.innerWidth - 100;
    }

    setPopoverPosition(popoverPosition);
    setShowPopOver(true);
  };

  const handleMouseLeave = () => {
    setShowPopOver(false);
  };

  return (
    <div
      className="red-box"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {number}
      {showPopOver && (
        <div
          className="pop-over"
          style={{ top: popoverPosition.top, left: popoverPosition.left }}
        >
          Pop Over
        </div>
      )}
    </div>
  );
};

export default Reddy;
