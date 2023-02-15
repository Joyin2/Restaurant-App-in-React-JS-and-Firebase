import React from 'react'
import Logo from "../img/logo.png"

const Header = () => {
  return (
    <div>
      <div className="w-screen fixed z50 p-6 px-16">
        {/* desktop view */}
        <div className="hidden md:flex w-full h-full ">
            <div className="flex items-center gap-2">
              <img src={Logo} className="w-10 object-cover" alt="logo" />
              <p className="text-headingColor text-xl font-bold">
                Chick
              </p>
            </div>
        </div>

        {/* mobile view */}
        <div className="flex md:hidden w-full h-full ">

        </div>
      </div>
    </div>
  )
}

export default Header
