import React, { useState, useEffect, useRef } from 'react';

function Login() {
  const usernameRef = useRef(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);

  useEffect(function () {
    usernameRef.current.focus();
  }, []);

  useEffect(
    function () {
      if (username.length > 3) {
        setIsUsernameValid(true);
      } else {
        setIsUsernameValid(false);
      }
    },
    [username]
  );

  const handelChange = (event) => {
    switch (event.target.name) {
      case 'username':
        setUsername(event.target.value);
        break;

      case 'password':
        setPassword(event.target.value);
        break;

      default:
        break;
    }
  };

  function login(event) {
    event.preventDefault();

    if (username.length === 0 || password.length === 0) {
      return;
    }

    setIsLoggedIn(true);
  }

  return (
    <section className='col-md-6 offset-md-3' style={{ marginTop: '40px' }}>
      {!isLoggedIn && (
        <form onSubmit={login}>
          <div className='form-group'>
            <label>Username</label>
            <input
              ref={usernameRef}
              name='username'
              type='text'
              className='form-control'
              placeholder='Enter username'
              value={username}
              onChange={handelChange}
            />

            {!isUsernameValid && (
              <small className='form-text' style={{ color: 'red' }}>
                Enter an valid Username
              </small>
            )}
          </div>

          <div className='form-group'>
            <label>Password</label>
            <input
              name='password'
              type='password'
              className='form-control'
              placeholder='Password'
              value={password}
              onChange={handelChange}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button
              type='submit'
              className={
                username.length && password.length
                  ? 'btn btn-primary'
                  : 'btn btn-primary disabled'
              }
            >
              Login
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

export default Login;
