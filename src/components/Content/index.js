import { Redirect, Route, Switch } from "react-router-dom"
import Dashboard from "../Dashboard"
import Leaderboard from "../Leaderboard"
import NewQuestion from "../NewQuestion"
import NotFound from "../NotFound"
import PrivateRoute from "../PrivateRoute"

const Content = () => (
  <Switch>
    <Redirect exact from="/" to="/dashboard" />
    <PrivateRoute path="/dashboard" component={Dashboard}>
      <Dashboard />
    </PrivateRoute>
    <PrivateRoute path="/leaderboard">
      <Leaderboard />
    </PrivateRoute>
    <PrivateRoute path="/newQ">
      <NewQuestion />
    </PrivateRoute>
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default Content;
export {
  Content
}

