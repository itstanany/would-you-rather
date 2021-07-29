import { Redirect, Route, RouteComponentProps, RouteProps } from "react-router-dom";
import { isLoggedIn } from "./utils"

const PrivateRoute = (props) => {
  const condition = isLoggedIn();
  return (
    condition
      ? <Route path={props.path} component={props.component} />
      : <Redirect to="/login" />
  )
}

export default PrivateRoute;
export {
  PrivateRoute
}