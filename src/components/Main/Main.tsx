import type React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";

const Main = (): React.ReactElement => {
    return (
        <div>
            <Navbar title="Welcome" />
            <Slider />
        </div>
    )
}

export default Main;