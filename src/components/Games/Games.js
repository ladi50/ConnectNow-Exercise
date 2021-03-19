import React, { useContext } from "react";

import { AppContext } from "../../context/context";
import Game from "./Game/Game";

import "./Games.css";

const Games = () => {
  const { filteredGames } = useContext(AppContext);

  return (
    <div className="games">
      {filteredGames?.length > 0 ? (
        filteredGames.map(
          ({ id, first_release_date, name, rating, summary }) => (
            <Game
              key={id}
              releaseDate={first_release_date}
              name={name}
              rating={rating}
              summary={summary}
            />
          )
        )
      ) : (
        <h3>No Games Found</h3>
      )}
    </div>
  );
};

export default Games;
