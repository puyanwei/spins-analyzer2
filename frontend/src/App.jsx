import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/HomePage";
import AnalysisPage from "./Pages/AnalysisPage";
import NotFoundPage from "./Pages/NotFoundPage";

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/analysis" component={AnalysisPage} />
        <Route component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  </div>
);

export default App;
