import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = props => {
  const { type = "Puff", color = "#000", size = 200 } = props;
  return <Loader type={type} color={color} height={size} width={size} />;
};

export default Spinner;
