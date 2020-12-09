import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <NavLink className='navbar-brand' to='/home'>
        React
      </NavLink>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <NavLink
              className='nav-link'
              to='/home'
              exact
              activeClassName='active'
            >
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              className='nav-link'
              to='/details'
              exact
              activeClassName='active'
            >
              Details
            </NavLink>
          </li>
        </ul>

        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink
              className='nav-link'
              to='/login'
              exact
              activeClassName='active'
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
