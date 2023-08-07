import React from "react";
import { useNavigate } from "react-router-dom";
const Navigate = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>
        Navigate Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
        magni sed assumenda laborum amet quos quis fugit soluta, voluptate
        labore, consequuntur harum aliquam? Impedit doloremque ea atque minus
        rerum aut.
      </h1>
      <button onClick={() => navigate("/home")}>Home</button>
      <br />
      <button onClick={() => navigate("/about")}>About</button>
    </div>
  );
};

export default Navigate;
