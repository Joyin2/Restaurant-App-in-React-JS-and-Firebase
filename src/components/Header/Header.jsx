import React from "react";
import Logo from "../img/logo.png";
import {IoIosBasket} from "react-icons/io"

const Header = () => {
  return (
    <header className="w-screen fixed z50 p-6 px-16">
      {/* desktop view */}
      <div className="hidden md:flex w-full h-full ">
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">Chick</p>
        </div>
        <ul className="flex items-center gap-8 ml-auto">
          <li className="text-base text-headingColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out ">
            Home
          </li>
          <li className="text-base text-headingColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out ">
            Menu
          </li>
          <li className="text-base text-headingColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out ">
            About Us
          </li>
          <li className="text-base text-headingColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out ">
            Service
          </li>
        </ul>
        <div className="relative flex items-center justify-center">
          <IoIosBasket className="text-textColor text-2xl ml-8 cursor-pointer"/>
          <div className=" absolute -right-2 -top-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="flex md:hidden w-full h-full "></div>
    </header>
  );
};

export default Header;
