import React from 'react';
import DashboardTopNav from '../../../Shared/DashboardTopNav/DashboardTopNav';

const MakeAdmin = () => {
  return (
    <div className="flex-1">
      <DashboardTopNav />
      <div className="bg-gray-100 m-4 p-2 rounded shadow">
        <h3>Make Admin</h3>
      </div>
    </div>
  );
};

export default MakeAdmin;
