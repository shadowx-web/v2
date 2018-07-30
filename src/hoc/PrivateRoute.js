import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component,currentUser, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      currentUser
        ? <Component currentUser={currentUser} {...props} />
        : <Redirect
            to={{ pathname: '/login',state: { from: props.location }}}
          />}
  />;

export default PrivateRoute;


// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// export const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         localStorage.getItem('user')
//             ? <Component {...props} />
//             : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//     )} />
// )