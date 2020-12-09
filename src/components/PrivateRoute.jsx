// if the user is not logged in send the user back to login page

import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../utils/Auth';

function PrivateRoute(props) {
  const { component: Component, path } = props;

  return (
    <Route path={path} exact>
      {!isLoggedIn() ? <Redirect to='/login' /> : <Component />}
    </Route>
  );
}

export default PrivateRoute;
