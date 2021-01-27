import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import GenericNotFound from "./pages/GenericNotFound";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about-us" exact component={About}></Route>
        <Route path='*' exact={true} component={GenericNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
