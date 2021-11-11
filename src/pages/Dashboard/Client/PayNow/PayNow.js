import React from 'react';
import DashboardTopNav from '../../../Shared/DashboardTopNav/DashboardTopNav';

const PayNow = () => {
  return (
    <div className="flex-1">
      <DashboardTopNav />

      <div className="flex-1">
        <div className="bg-gray-100 m-4 p-2 rounded shadow">
          <h3 className="text-center font-bold text-gray-800 text-2xl">
            Coming Soon!!!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PayNow;
