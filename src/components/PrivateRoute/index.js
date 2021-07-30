import { Redirect, Route } from "react-router-dom";
import { isLoggedIn } from "./utils"

const PrivateRoute = (props) => {
  const condition = isLoggedIn();
  console.log('inside private route and props.path is', props);
  return (
    condition
      ? <Route path={props.path} component={props.component} />
      : <Redirect from={props.path} to={`/login?from=${props.path}`} />
  )
}
export default PrivateRoute;
export {
  PrivateRoute
}