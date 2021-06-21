import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import Analysis from "./Pages/Analysis";
import NotFound from "./Pages/NotFound";

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/analysis" component={Analysis} />
        <Route component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  </div>
);

export default App;
