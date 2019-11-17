import React, { Suspense, lazy } from "react";
import { Router, Route, Switch, Redirect, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const Submission = lazy(() => import("./pages/submission"));
const Result = lazy(() => import("./pages/result"));

const NoMatch = () => {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

const RouterConfiguration = () => {
  return (
    <Router history={history}>
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/submission" />
          </Route>

          <Route path="/submission">
            <Submission />
          </Route>

          <Route path="/result">
            <Result />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default RouterConfiguration;
