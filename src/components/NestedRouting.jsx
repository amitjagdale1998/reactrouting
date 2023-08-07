import React from "react";
import { Link, Outlet } from "react-router-dom";
const NestedRouting = () => {
  return (
    <div>
      <div>
        <Link to="nested1">nested1</Link>
        <Link to="nested2">nested2</Link>
        <Link to="nested3">nested3</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default NestedRouting;
