import { Route, Switch } from "react-router-dom";


import AboutUs from "../pages/AboutUs";
import Accommodation from "../pages/Accommodation";
import Home from "../pages/Home";
import HostDashboard from "../pages/HostDashboard";
import NomadeDashboard from "../pages/NomadeDashboard";
import Trips from "../pages/Trips";
import NotFound from "../pages/NotFound";
import RegisterAccommod from "../pages/RegisterAccommod";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/trips">
        <Trips />
      </Route>

      <Route exact path="/aboutUs">
        <AboutUs />
      </Route>

      <Route exact path="/accommodation">
        <Accommodation />
      </Route>

      <Route exact path="/hostDash/:id">
        <HostDashboard />
      </Route>

      <Route exact path="/registerAccommod">
        <RegisterAccommod />
      </Route>

      <Route exact path="/nomadeDash/:id">
        <NomadeDashboard />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
