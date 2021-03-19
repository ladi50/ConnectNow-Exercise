import { useCallback, useState } from "react";
import { useFetch } from "./useFetch";

export const useGame = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFiltreredGames] = useState([]);
  const [cleared, setCleared] = useState(false);

  const { fetchHandler } = useFetch();

  const getGames = useCallback(() => {
    fetchHandler()
      .then((res) => {
        setGames(res);
        setFiltreredGames(res);
      })
      .catch((err) => console.log(err));
  }, [fetchHandler]);

  const compare = (a, b, attr) => {
    if (attr === "score") attr = "rating";

    if (a[attr] < b[attr]) {
      return -1;
    }
    if (a[attr] > b[attr]) {
      return 1;
    }
    return 0;
  };

  const filterGames = useCallback(
    (data) => {
      let newGames = [...games];

      if (data.name.length > 0) {
        newGames = newGames.filter((game) =>
          game.name.toLowerCase().includes(data.name)
        );
      }

      if (data.score.length > 0) {
        newGames = newGames.filter(
          (game) => game.rating <= parseFloat(data.score)
        );
      }

      if (data.order.length > 0) {
        newGames = newGames.sort((a, b) => compare(a, b, data.order));
      }

      setFiltreredGames(newGames);
    },
    [games]
  );

  const clearGames = useCallback(() => {
    setCleared((prevState) => !prevState);
    setFiltreredGames(games);
  }, [games]);

  return { games, filteredGames, getGames, filterGames, clearGames, cleared };
};
