import React from "react";
import { NavLink } from "react-router-dom";

import "./Link.css";

const Link = ({ href, name, firstWord, last }) => {
  return (
    <NavLink to={href} exact className="link">
      <h1 className={`${last && "link__title-last"}`}>{firstWord}</h1>
      
      <div className={`${last && "link__title-last"} link__title`}>
        <span>{firstWord}</span> {name}
      </div>
    </NavLink>
  );
};

export default Link;
