import React, { useState } from 'react';
import ColorPickerRadioButton from './ColorPickerRadioButton';

const ColorPicker = ({selectedColor, setSelectedColor, colorArray}) => {
    // const [selectedColor, setSelectedColor] = useState('gray');
    //const colorArray = ["gray", "red", "orange", "yellow", "green", "blue", "violet"]
    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
        document.documentElement.style.setProperty(`--selected-color`, event.target.value);

        const boxShadowString = `--${event.target.value}-color-box-shadow`;
        const boxShadowValue = getComputedStyle(document.documentElement).getPropertyValue(boxShadowString);

        document.documentElement.style.setProperty(`--selected-color-box-shadow`, boxShadowValue);
    };

    return (
        <div className="color-picker d-flex flex-row justify-content-around w-100">
            {colorArray.map((color) => (
                <ColorPickerRadioButton key={color} color={color} selectedColor={selectedColor} onColorChange={handleColorChange} />
            ))}
        </div>
    );
};

export default ColorPicker;
