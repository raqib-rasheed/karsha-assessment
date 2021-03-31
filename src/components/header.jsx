import React from "react";
import Logo from "../assets/images/logo.png";
import User from "../assets/images/user.jpg";
import { GoSearch } from "react-icons/go";
import { IoMdNotifications } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-container ml-5">
        <img className="header__logo" alt="logo" src={Logo} />
      </div>
      <div className="header-icons px-2 d-flex justify-content-center">
        <label>
          <input type="search" className="header-icons-search-input" />
          <GoSearch className="grey-icon mr-5" />
        </label>
        <span className="header-icons__notification">
          <IoMdNotifications className="grey-icon mt-1" />
          <span className="header-icons__notification-alert">5</span>
        </span>
        <div className="header__icons--user_image-container">
          <img className="header__icons--user_image" src={User} alt="" />
        </div>
        <BiDotsVerticalRounded className="grey-icon mt-1" />
      </div>
    </div>
  );
};

export default Header;
