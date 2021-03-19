import React, { useContext, useEffect, useState } from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";
import { AppContext } from "../../context/context";

import "./Filter.css";

const Filter = () => {
  const [value, setValue] = useState({
    name: "",
    score: 100,
    order: ""
  });

  const { filterGames, cleared } = useContext(AppContext);

  const inputChange = (e) => {
    const { name, value } = e.target;

    setValue((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    filterGames(value);
  }, [value, filterGames]);

  useEffect(() => {
    setValue({
      name: "",
      score: 100,
      order: ""
    });
  }, [cleared]);

  return (
    <div className="filter">
      <h2>Filter Results</h2>

      <Input
        type="text"
        name="name"
        label="Name (contains)"
        placeholder="Search game..."
        onChange={inputChange}
        value={value.name}
      />

      <div className="filter__inputs">
        <Input
          type="range"
          name="score"
          label="Minimum Score"
          max={100}
          onChange={inputChange}
          value={value.score}
        />

        <Input
          name="order"
          label="Order By"
          onChange={inputChange}
          value={value.order}
        />

        <Button />
      </div>
    </div>
  );
};

export default Filter;
