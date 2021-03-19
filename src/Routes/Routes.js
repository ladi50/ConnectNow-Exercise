import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router";

const VideoGames = lazy(() => import("../pages/VideoGames/VideoGames"));
const Contact = lazy(() => import("../pages/Contact/Contact"));

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <VideoGames />
      </Route>

      <Route path="/contact" exact>
        <Contact />
      </Route>

      <Redirect to="/">
        <VideoGames />
      </Redirect>
    </Switch>
  );
};

export default Routes;
