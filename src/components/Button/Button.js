import React, { useContext } from "react";

import { AppContext } from "../../context/context";

import "./Button.css";

const Button = () => {
  const { clearGames } = useContext(AppContext);

  const clearFilter = () => {
    clearGames();
  };
  return (
    <button className="button" onClick={clearFilter}>
      Clear
    </button>
  );
};

export default Button;
