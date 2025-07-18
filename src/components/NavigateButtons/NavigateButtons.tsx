import type React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../Buttons/CustomButton";
import clothes from "../../assets/images/clothes.jpg";

const NavigateButtons = (): React.ReactElement => {

    const buttons: string[] = [
        "Hoodies",
        "Dresses",
        "Suits",
        "Shoes",
        "T-Shirts",
        "Jeans",
        "Jackets",
        "Bags",
    ];

    return (
        <div>
            <div className="flex items-center justify-center py-8">
                {buttons.map((button, index) => {
                    return (
                        <div key={index} style={{ margin: "7px" }}>
                            <Link to={"/filteredProducts/" + button.toLowerCase()}>
                                <CustomButton label={button} />
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center">
                <div
                    style={{ margin: "6px", maxWidth: "940px", width: "100%" }}
                    className="bg-red-400 flex items-center justify-center py-8 rounded-md"
                >
                    <h3 className="text-red-600 text-center text-lg font-bold">
                        SALES UP TO 50%
                    </h3>
                </div>
            </div>

            <div className="flex justify-center item-center py-4">
                <img
                    className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600"
                    src={clothes}
                    alt="clothes"
                ></img>
            </div>
        </div>
    );
}

export default NavigateButtons;