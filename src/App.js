import "./styles/reset.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Habits from "./Components/Habits";
import Today from "./Components/Today";
import History from "./Components/History";
import { useState, useContext } from "react";
import UserContext from "./contexts/UserContext";
import CreatedHabContext from "./contexts/CreatedHabContext";

export default function App() {
    const [user, setUser] = useState();
    const [createdHab, setCreatedHab] = useState([]);
    const [habsList, setHabsList] = useState([]);
    const [todayHabs, setTodayHabs] = useState([]);
    const [doneHabs, setDoneHabs] = useState([]);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                todayHabs,
                setTodayHabs,
                doneHabs,
                setDoneHabs,
            }}
        >
            <CreatedHabContext.Provider
                value={{ createdHab, setCreatedHab, habsList, setHabsList }}
            >
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                            <Login />
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
            </CreatedHabContext.Provider>
        </UserContext.Provider>
    );
}
