import React, { useState } from 'react';
import ColorPickerRadioButton from './ColorPickerRadioButton';

const ColorPicker = ({selectedColor, setSelectedColor, colorArray}) => {
    // const [selectedColor, setSelectedColor] = useState('gray');
    //const colorArray = ["gray", "red", "orange", "yellow", "green", "blue", "violet"]
    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div className="color-picker d-flex flex-row justify-content-around w-100">
            {colorArray.map((color) => (
                <ColorPickerRadioButton color={color} selectedColor={selectedColor} setSelectedColor={setSelectedColor} handleColorChange={handleColorChange} />
            ))}
        </div>
    );
};

export default ColorPicker;
