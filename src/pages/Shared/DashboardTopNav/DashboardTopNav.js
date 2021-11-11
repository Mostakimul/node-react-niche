import React from 'react';
import { Link } from 'react-router-dom';

const DashboardTopNav = () => {
  return (
    <div className="hidden md:block">
      <div className="container bg-red-50 py-4 flex justify-end  ">
        <Link
          to="/"
          className="bg-red-100 hover:bg-red-200 py-1 px-2 rounded shadow"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default DashboardTopNav;
