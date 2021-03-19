import React, { useContext, useEffect } from "react";

import Filter from "../../components/Filter/Filter";
import Games from "../../components/Games/Games";
import Spinner from "../../components/Spinner/Spinner";
import { AppContext } from "../../context/context";

import "./VideoGames.css";

const VideoGames = () => {
  const { games, getGames } = useContext(AppContext);

  useEffect(() => {
    getGames();
  }, [getGames]);

  return (
    <div className="videoGames">
      {games.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <Filter />

          <Games />
        </>
      )}
    </div>
  );
};

export default VideoGames;
