import { createContext } from "react";

export const AppContext = createContext({
  games: [],
  filteredGames: [],
  cleared: null,
  getGames: () => {},
  filterGames: () => {},
  clearGames: () => {}
});
