import React from "react";

const NavItem = ({ title }) => {
  return (
    <>
      <div className="group mx-5 group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-red-700">
        <h1 className="text-xl md:text-2xl font-semibold h-8 group-hover:scale-125 duration-300 font-mono">
          {title} 
        </h1>
      </div>
    </>
  );
};

export default NavItem;
