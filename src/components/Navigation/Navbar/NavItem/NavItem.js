import React from "react";
import "./NavItem.css";

const NavItem = (props) => {
  <div className="nav-item">
    <a href={props.link}>{props.children}</a>
  </div>;
};

export default NavItem;
