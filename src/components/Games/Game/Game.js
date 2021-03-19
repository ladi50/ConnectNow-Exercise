import React from "react";

import "./Game.css";

const Game = ({ releaseDate, name, rating, summary }) => {
  return (
    <div className="game">
      <div className="game__img"></div>

      <div className="game__details">
        <h3>{name}</h3>

        <h4>
          Release Date:{" "}
          {new Date(releaseDate).toLocaleDateString().replace(/\./g, "/")}
        </h4>

        <p>[Summary] {summary.substr(0, 200)}...</p>
      </div>

      <div className="game__score">
        <h4>{Math.floor(rating)}</h4>
      </div>
    </div>
  );
};

export default Game;
