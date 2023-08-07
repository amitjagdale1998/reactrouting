import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        textDecoration: "none",
      }}
    >
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/params">Params</NavLink>
      <NavLink to="/searchparams">searchParams</NavLink>
      <NavLink to="/navigator">Navigete</NavLink>
      <NavLink to="/nestedroute">nestedRoute</NavLink>
      <NavLink to="/uselocation">uselocation</NavLink>
    </div>
  );
};

export default Navbar;
