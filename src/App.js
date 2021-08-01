import { Suspense, Fragment } from "react";
import LandingPage from "./pages/Landing";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

function AppRoutes() {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Suspense>
    </Fragment>
  );
}

export default App;
