import React from "react";
import { NavLink } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return <NavLink to="/" className="logo"></NavLink>;
}

export default Logo;