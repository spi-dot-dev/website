import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Splash from "./components/Splash";
import About from "./components/About";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route path="/" exact component={Splash} />
        <Route path="/about" exact component={About} />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
