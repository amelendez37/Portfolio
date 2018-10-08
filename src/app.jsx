import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.jsx";
import About from "./components/about/about.jsx";

const App = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact path="/" component={About} />
    </Switch>
  </React.Fragment>
);

export default App;
