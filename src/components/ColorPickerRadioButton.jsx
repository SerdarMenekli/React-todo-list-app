import React, {useState} from "react";

const ColorPickerRadioButton = ({color, selectedColor, setSelectedColor, handleColorChange}) => {
    return (
        <input
        className="form-check-input fs-4"
        type="radio"
        name="colorRadio"
        id={`${color}Radio`}
        value={color}
        checked={selectedColor === color}
        onChange={handleColorChange}
        style={{ backgroundColor: color , color: color}}
      />
    );
}

export default ColorPickerRadioButton;