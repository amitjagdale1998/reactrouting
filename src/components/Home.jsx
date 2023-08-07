import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloribus
      ducimus deleniti quasi natus doloremque nulla dolorum, magnam nostrum
      animi voluptas deserunt, numquam eligendi, asperiores quae fugit eum ea!
      At?<br></br> <Link to="/about">About</Link>;
    </div>
  );
};

export default Home;
