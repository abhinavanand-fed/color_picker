import React, { useState } from "react";
import "./ColorPicker.css";

const ColorPicker = () => {
  const [color, setColor] = useState("#000000");

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  const rgb = (hex) => {
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className="color-picker">
      <div className="color-picker-input">
        <input type="color" value={color} onChange={handleChange} />
        <p>{color}</p>
      </div>
      <p className="color-picker-value">RGB: {rgb(color.substring(1))}</p>
      <p className="color-picker-value">HEX: {color}</p>
    </div>
  );
};

export default ColorPicker;
