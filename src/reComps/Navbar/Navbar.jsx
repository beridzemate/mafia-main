import React, { useState } from "react";
import BackArrow from "../BackArrow/BackArrow";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./navbar.scss";

const Navbar = ({ backLinkFromRoleQueue }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const backLinkToRoleQueue = "/night/role_queue";

  return (
    <div className="navbar">
      <BackArrow
        backLink={
          backLinkFromRoleQueue ? backLinkFromRoleQueue : backLinkToRoleQueue
        }
      />


      
      <div className="title">
        <h1>მაფია</h1>
      </div>
      <button className="dropdown_menu_btn" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faBarsStaggered} />
        <DropdownMenu isDropdownVisible={isDropdownVisible} />
      </button>
    </div>
  );
};

<div className="title1">
  <h1>მათე მაგარია</h1>
  <button type="button">dropdown_menu_btn onClick={toString}</button>
</div>
export default Navbar;
