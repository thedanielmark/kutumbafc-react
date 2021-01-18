import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Importing auth components
import CheckIfLoggedIn from "./CheckIfLoggedIn";

// Importing all pages
import Index from "./pages/Index";
import Players from "./pages/Players";
import Fixtures from "./pages/Fixtures";
import Newsroom from "./pages/Newsroom";
import Gallery from "./pages/Gallery";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DataProcessingAddendum from "./pages/DataProcessingAddendum";
import Error404 from "./pages/Error404";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <CheckIfLoggedIn exact path="/" component={Index} />
          <CheckIfLoggedIn exact path="/players" component={Players} />
          <CheckIfLoggedIn exact path="/fixtures" component={Fixtures} />
          <CheckIfLoggedIn exact path="/newsroom" component={Newsroom} />
          <CheckIfLoggedIn exact path="/gallery" component={Gallery} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route
            exact
            path="/data-processing-addendum"
            component={DataProcessingAddendum}
          />
          <Route exact path="/terms-of-service" component={TermsOfService} />
          <Route exact path="/404" component={Error404} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}
