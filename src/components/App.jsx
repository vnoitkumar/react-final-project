import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import Home from './Home';
import Login from './Login';
import Details from './Details';
import NotFound from './NotFound';

import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div className='container'>
        <Switch>
          <PublicRoute path='/login' component={Login} />

          <PrivateRoute path='/home' component={Home} />
          <PrivateRoute path='/details' component={Details} />

          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

// Login - public (Validation)
// Home (List) - private - github api
// Details page - private - dynamic route

// Theme - inside Header

// Maintain the Session of the user
// Theme details - local storage
