import React from "react";
import { Navigate } from "react-router-dom";

const Protectedroutes = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    <Navigate to="/"></Navigate>;
    return null;
  } else {
    return children;
  }
};

export default Protectedroutes;
