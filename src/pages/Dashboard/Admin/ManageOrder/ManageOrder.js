import React from 'react';
import DashboardTopNav from '../../../Shared/DashboardTopNav/DashboardTopNav';
// import ModalConfirm from '../../../Shared/ModalConfirm/ModalConfirm';

const ManageOrder = () => {
  // const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex-1">
      <DashboardTopNav />
      <div className="bg-gray-100 m-4 p-2 rounded shadow">
        <h3 className="text-center font-bold text-gray-800 text-2xl">
          Manage order
        </h3>
      </div>
      {/* <ModalConfirm /> */}
    </div>
  );
};

export default ManageOrder;
