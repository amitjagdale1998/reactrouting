import React from "react";
import { useParams } from "react-router-dom";

const Useparams = () => {
  const params = useParams();
  const { name } = params;
  return <div>Useparams{"  " + name}</div>;
};

export default Useparams;
