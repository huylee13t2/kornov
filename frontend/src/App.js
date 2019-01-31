import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Main, Login, Register, Lanepage, NoMatch } from "./containers";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Lanepage} />
          <Route exact path="/home" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
