import React from "react";
import logoImg from "../../assets/logo.png";
import coinImg from "../../assets/dollar.png";

const Navbar = ({availableBalance}) => {
  return (
    <div className="navbar max-w-[1200px] mx-auto flex justify-between">
      <div className="">
        <img className="w-[50px] h-[50px]" src={logoImg} alt="" />
      </div>
      <div >
        <div className="flex items-center gap-1 btn">
          <span>{availableBalance}</span>
          <span>Coin</span>
          <img src={coinImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
