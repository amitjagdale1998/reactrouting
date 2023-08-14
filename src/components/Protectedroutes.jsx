import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Protectedroutes = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    <Navigate to={"/login"}></Navigate>;

    return;
  } else {
    return children;
  }
};

export default Protectedroutes;
