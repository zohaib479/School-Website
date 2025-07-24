import React, { useState, useEffect } from 'react';

const SwitchComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = 'black';
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="z-10 float-right form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <label className="text-blue-600 form-check-label" htmlFor="flexSwitchCheckDefault">
        Dark Mode
      </label>
    </div>
  );
};

export default SwitchComponent;
