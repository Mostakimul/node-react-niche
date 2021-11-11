import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import LoaderSpin from '../Shared/LoaderSpin/LoaderSpin';

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin } = useAuth();

  if (isLoading) {
    return <LoaderSpin />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/dashboard',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
