import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Habits from "./Components/Habits";
import Today from "./Components/Today";
import History from "./Components/History";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login path="/" exact />
        </Route>
        <Route>
          <Register path="/cadastro" exact />
        </Route>
        <Route>
          <Habits path="/habitos" exact />
        </Route>
        <Route>
          <Today path="/hoje" exact />
        </Route>
        <Route>
          <History path="/historico" exact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
