import { createContext, useContext, useState } from "react";

const selectedColorContext = createContext();
const setSelectedColorContext = createContext();
const colorArrayContext = createContext();


export function ColorProvider({children}){
    const [selectedColor, setSelectedColor] = useState('gray');

    const colorArray = ["gray", "red", "orange", "yellow", "green", "blue", "violet"];

    return(
        <selectedColorContext.Provider value={selectedColor}>
            <setSelectedColorContext.Provider value={setSelectedColor}>
                <colorArrayContext.Provider value={colorArray}>
                    {children}
                </colorArrayContext.Provider>
            </setSelectedColorContext.Provider>
        </selectedColorContext.Provider>
    );
}

export const useSelectedColorContext = () => useContext(selectedColorContext);
export const useSetSelectedColorContext = () => useContext(setSelectedColorContext);
export const useColorArrayContext = () => useContext(colorArrayContext);




