import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ConfigPage from "./components/pages/ConfigPage";
import HomePage from "./components/pages/HomePage";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/config" component={ConfigPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
