import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "../../components/RouterURL/RouterURL";
import Menu from "../../components/Menu/Menu";
import "./index.css";
import ContactBar from "../../components/ContactBar/ContactBar";
import CreateBar from "../../components/CreateBar/CreateBar";

class App extends Component {
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };

  render() {
    return (
      <Router>
        <div className="all">
          <div className="bg-all" id="bg-all">
            <Menu />
            <div className="main">{this.showContentMenus(routes)}</div>
            <ContactBar />
            <CreateBar />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
