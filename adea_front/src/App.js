import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/home/home";
import Gestion from "./admin/gestion/gestion";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faAt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import WeAndOurGoals from "./components/weAndOurGoals/weAndOurGoals";
import Adhesion from "./components/adhesion/adhesion";
import Contact from "./components/contact/contact"

library.add(fab, faPhoneAlt, faAt);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/gestion">
            <Gestion />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/weAreOurGoals">
            <WeAndOurGoals />
          </Route>
          <Route path="/adhesion">
            <Adhesion />
          </Route>
          <Route path="/adhesion">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
