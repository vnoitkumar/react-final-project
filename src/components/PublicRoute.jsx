// if the user is logged in redirect the user to home page
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../utils/Auth';

function PublicRoute(props) {
  const { component: Component, path } = props;

  return (
    <Route path={path} exact>
      {isLoggedIn() ? <Redirect to='/home' /> : <Component />}
    </Route>
  );
}

export default PublicRoute;
