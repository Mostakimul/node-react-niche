import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardTopNav = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="hidden md:block">
      <div className="container bg-red-50 py-4 flex justify-end  items-center">
        <span className="text-green-700 font-semibold font-display mx-2">
          {user?.displayName}
        </span>
        <button
          onClick={logOut}
          className="bg-red-100 hover:bg-red-200 py-1 px-2 rounded shadow"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardTopNav;
