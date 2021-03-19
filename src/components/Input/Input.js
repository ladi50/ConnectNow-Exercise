import React from "react";
import { ArrowUpwardOutlined } from "@material-ui/icons";

import { useStyles } from "./styles";

import "./Input.css";

const Input = ({ type, max, name, placeholder, label, onChange, value }) => {
  const classes = useStyles();

  return (
    <>
      {name !== "order" && (
        <div className="input">
          <label htmlFor={name}>{label}</label>

          {name === "score" && <h3>{value}</h3>}

          <input
            style={{ padding: name === "score" && "0" }}
            type={type}
            id={name}
            name={name}
            value={value}
            max={max}
            placeholder={placeholder}
            onChange={onChange}
            autoComplete="off"
          />
        </div>
      )}

      {name === "order" && (
        <div className="input__select">
          <label htmlFor={name}>{label}</label>

          <div>
            <ArrowUpwardOutlined className={classes.arrow} />

            <select
              name="order"
              id={name}
              value={value}
              onChange={onChange}
            >
              <option value="first_release_date">Release Date</option>
              <option value="score">Score</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default Input;
