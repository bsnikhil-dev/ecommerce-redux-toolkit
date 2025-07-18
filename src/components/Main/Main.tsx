import type React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import NavigateButtons from "../NavigateButtons/NavigateButtons";

const Main = (): React.ReactElement => {
    return (
        <div>
            <Navbar title="Welcome" />
            <Slider />
            <NavigateButtons/>
        </div>
    )
}

export default Main;