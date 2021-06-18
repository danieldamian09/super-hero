// router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// vistas
import Login from "../views/Login";
import FourOFour from "../views/404";
import Home from "../views/Home";
import TeamHero from "../views/TeamHero";
import DetailHero from "../views/DetailHero";

export default function Routes() {



    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/home/teamhero">
                    <TeamHero />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/hero/id">
                    <DetailHero />
                </Route>
                <Route>
                    <FourOFour />
                </Route>
            </Switch>
        </Router>
    )
}


