import { Dashboard } from "./Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};
