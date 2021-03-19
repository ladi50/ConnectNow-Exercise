import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Spinner from "./components/Spinner/Spinner";
import { AppContext } from "./context/context";
import { useGame } from "./hooks/useGame";

import "./App.css";
import Routes from "./Routes/Routes";

const App = () => {
  const {
    games,
    filteredGames,
    getGames,
    filterGames,
    clearGames,
    cleared
  } = useGame();

  const value = {
    games,
    filteredGames,
    getGames,
    filterGames,
    clearGames,
    cleared
  };

  return (
    <AppContext.Provider value={value}>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Navbar />

          <Routes />
        </BrowserRouter>
      </Suspense>
    </AppContext.Provider>
  );
};

export default App;
