import { useContext, useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { AppContext } from "../../contexts/appContext";

const Header = () => {

    const [isActive, setIsActive] = useState<boolean>(false);
    const { isFalse, setIsOpen } = useContext(AppContext).sideBar;
    const { itemAmount } = useContext(AppContext).cart;

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
    });
    return (
        <header
            className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
                } fixed w-full z-10 lg:px-8 transition-all`}
        >
            <div className="container mx-auto flex items-center justify-between h-full">
                <Link to={"/"} className="ml-[200px]">
                    <div className="w-[40px]">
                        <img src={Logo} alt="" />
                        <div className="font-semibold flex items-center uppercase">
                            <div className="w-10 h-[2px] "></div>Home
                        </div>
                    </div>

                </Link>

                <div onClick={() => setIsOpen(!isFalse)} className="cursor-pointer flex relative mr-[200px]">
                    <FaCartShopping className="text-2xl" />
                    <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                        {itemAmount}
                    </div>
                </div>
            </div>
        </header>
    );


}

export default Header;