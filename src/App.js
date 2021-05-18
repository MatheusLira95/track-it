import "./styles/reset.css"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Habits from "./Components/Habits";
import Today from "./Components/Today";
import History from "./Components/History";

export default function App() {
  const [user, setUser] = useState([]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login  />
        </Route>
        <Route path="/cadastro" exact>
          <Register />
        </Route>
        <Route path="/habitos" exact>
          <Habits />
        </Route>
        <Route path="/hoje" exact>
          <Today />
        </Route>
        <Route path="/historico" exact>
          <History />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
