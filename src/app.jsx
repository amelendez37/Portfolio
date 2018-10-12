import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.jsx";
import About from "./components/about/about.jsx";
import Featured from "./components/featured/featured.jsx";
import Contact from "./components/contact/contact.jsx";

const App = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/featured" component={Featured} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </React.Fragment>
);

export default App;
