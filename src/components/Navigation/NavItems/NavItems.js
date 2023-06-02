import React from "react";
import "./NavItems.css";
import NavItem from "../Navbar/NavItem/NavItem";

const NavItems = (props) => {
  return (
    <ul className="nav-items">
      <NavItem link="./">Shopping</NavItem>
      <NavItems link="./">CheckOut</NavItems>
    </ul>
  );
};

export default NavItems;
