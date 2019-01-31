import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Blog } from "./index";
import { Header, Footer } from "../components/layouts";

class Main extends React.Component {
  render() {
    return (
      <div className="main-content">
        <Header />
        <div className="page-content">
          <Switch>
            <Route exact path={`${this.props.match.url}`} component={Home} />
            <Route
              exact
              path={`${this.props.match.url}blog`}
              component={Blog}
            />
          </Switch>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Main;
