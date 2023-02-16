import React from "react";
import { IoIosBasket } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";

const Header = () => {
  return (
    <header className="w-screen fixed z50 p-6 px-16">
      {/* desktop view */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">Chick</p>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 ">
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
            <IoIosBasket className="text-textColor text-2xl  cursor-pointer" />
            <div className=" absolute -right-2 -top-4 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <div>
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Avatar}
              alt="userProfile"
              className="w-10 min-w-[40px] h-10 min-h-[40] cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="flex md:hidden w-full h-full drop-shadow-xl"></div>
    </header>
  );
};

export default Header;
