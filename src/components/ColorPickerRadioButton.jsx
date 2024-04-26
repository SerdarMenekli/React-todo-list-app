import React, {useState} from "react";

const ColorPickerRadioButton = ({color, selectedColor, onColorChange}) => {
    return (
        <input
        className="form-check-input fs-4"
        type="radio"
        name="colorRadio"
        id={`${color}Radio`}
        value={color}
        checked={selectedColor === color}
        onChange={onColorChange}
        style={{ backgroundColor: color , color: color}}
      />
    );
}

export default ColorPickerRadioButton;