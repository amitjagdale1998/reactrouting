import React from "react";
import { useLocation } from "react-router-dom";
const UseLocation = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>http://localhost:3000/uselocation?hello=10#12234567890</h1>
      pathname:{location.pathname}
      <br></br>
      search:{location.search}
      <br></br>
      Hash :{location.hash}
      <br></br>
      state:{location.state}
    </div>
  );
};

export default UseLocation;
