import React, { useState } from 'react';
import './index.scss';

function PopupButton() {
  const [isOpen, setIsOpen] = useState(false);

  // function to toggle the popup
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='bundle'>
      <button className="popup-button" onClick={togglePopup}>Live Demo</button>
      {isOpen && <div className="popup-div" onClick={togglePopup}>
        <button className="close-button" onClick={togglePopup}>X</button>
        <div className="popup"></div>
        </div>
      }
    </div>
  );
}

export default PopupButton;
