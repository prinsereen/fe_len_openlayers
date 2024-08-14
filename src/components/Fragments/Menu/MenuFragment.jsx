import { MenuButton } from "../../Element/Button/MenuButton";
import { ConversionFragment } from "../Convertion/ConvertionFragment";
import { useState } from 'react';

const MenuFragment = () => {
    const [isConversionVisible, setConversionVisible] = useState(false);

    const handleButtonClick = () => {
        setConversionVisible(!isConversionVisible);
    };

    const handleCloseConversion = () => {
        setConversionVisible(false);
    };

    return (
        <>
            <div className="absolute top-1/2 right-0 pr-6 flex flex-col space-y-12 items-end transform -translate-y-1/2">
                <MenuButton onClick={handleButtonClick} imgSrc="convert.svg" />
            </div>
            {isConversionVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <button
                        className="absolute top-4 right-4 text-white text-2xl"
                        onClick={handleCloseConversion}
                    >
                        X
                    </button>
                    <ConversionFragment />
                </div>
            )}
        </>
    );
}

export default MenuFragment;
