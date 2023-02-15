import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="w-screen fixed z50 p-6 px-16">
        {/* desktop view */}
        <div className="hidden md:flex w-full h-full ">
            
        </div>

        {/* mobile view */}
        <div className="flex md:hidden w-full h-full ">

        </div>
      </div>
    </div>
  )
}

export default Header
