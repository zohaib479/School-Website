import React, { useState } from 'react';

const SwitchComponent = (props) => {
  const [color, setColor] = useState('white'); // Default color is white

  const handleToggle = () => {
    if (props.val) {
      setColor('black'); // Set to black when switch is on
      document.body.style.backgroundColor = 'black'; // Change body background color
    } else {
      setColor('white'); // Set to white when switch is off
      document.body.style.backgroundColor = 'white'; // Revert body background color
    }
  };

  return (
    <div className="z-10 float-right form-check form-switch">
      <input
        value={props.val}
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        onChange={handleToggle} // Trigger color change on switch toggle
      />
      <label className=" text-blue-600 form-check-label" htmlFor="flexSwitchCheckDefault">
        Dark Mode
      </label>
    </div>
  );
};

export default SwitchComponent;
