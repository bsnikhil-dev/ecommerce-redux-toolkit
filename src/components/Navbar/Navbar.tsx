import type React from "react";
import type { NavbarProps } from "./Navbar.types";
import logo from "../../assets/images/logo.png";

const Navbar: React.FC<NavbarProps> = ({ title }): React.ReactElement => {
    return (
        <>
            <div>
                <div className="bg-black p-2 w-full">
                    <h3 className="text-white font-inter text-2xl font-bold tracking-normal leading-none text-center">
                        {title}
                    </h3>
                </div>
            </div>

            <div className="flex justify-around items-center">
                <div>
                    <img className="h-28 w-full" src={logo} alt="Logo" />
                </div>
                <div className="flex flex-row items-center">
                    <button className="font-inter text-base font-medium tracking-normal leading-none text-center m-4">Logout</button>
                </div>
                <div className="flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="#000"
                        className="size-6">
                        <path strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <p className="font-inter text-base font-medium tracking-normal leading-none text-center m-4">
                        Whish List
                    </p>
                </div>
                <div className="flex flex-row items-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-4">
                        <path fillRule="evenodd"
                            d="M5 4a3 3 0 0 1 6 0v1h.643a1.5 1.5 0 0 1 1.492 1.35l.7 7A1.5 1.5 0 0 1 12.342 15H3.657a1.5 1.5 0 0 1-1.492-1.65l.7-7A1.5 1.5 0 0 1 4.357 5H5V4Zm4.5 0v1h-3V4a1.5 1.5 0 0 1 3 0Zm-3 3.75a.75.75 0 0 0-1.5 0v1a3 3 0 1 0 6 0v-1a.75.75 0 0 0-1.5 0v1a1.5 1.5 0 1 1-3 0v-1Z"
                            clipRule="evenodd" />
                    </svg>
                    <p className="font-inter text-base font-medium tracking-normal leading-none text-center">
                        Shopping Bag
                    </p>
                </div>
            </div>

            <div className="flex bg-black p-4 w-full justify-around">
                <div  className="text-white font-inter text-base font-medium tracking-normal leading-none text-center">
                    50% OFF
                </div>
                 <div  className="text-white font-inter text-base font-medium tracking-normal leading-none text-center">
                    Free Shipping and returns
                </div>
                 <div  className="text-white font-inter text-base font-medium tracking-normal leading-none text-center">
                   Different Payment Methods
                </div>
            </div>
        </>
    )
}

export default Navbar;