/* eslint-disable react/destructuring-assignment */
import { Redirect, Route } from 'react-router-dom';
import { isLoggedIn } from './utils';

const PrivateRoute = (props) => {
  const condition = isLoggedIn();
  return (
    condition
      ? (
        <Route path={props.path} component={props.component}>
          {props.children}
        </Route>
      )
      : <Redirect to={`/login?from=${props.location.pathname}`} />
  );
};
export default PrivateRoute;
export {
  PrivateRoute,
};
