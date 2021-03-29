import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import {ReduxAppState} from './store';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({component: Component, ...rest}) => {
  const {isAuthenticated} = rest;
  console.log({isAuthenticated});
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )
      }
    />
  );
};

function mapStateToProps(state: ReduxAppState) {
  return {
    isAuthenticated: state.hasValidateAuthentification,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
