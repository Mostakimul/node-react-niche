import React from 'react';
import DashboardTopNav from '../../../Shared/DashboardTopNav/DashboardTopNav';

const ManageOrder = () => {
  return (
    <div className="flex-1">
      <DashboardTopNav />
      <div className="bg-gray-100 m-4 p-2 rounded shadow">
        <h3>Manage Orders</h3>
      </div>
    </div>
  );
};

export default ManageOrder;
