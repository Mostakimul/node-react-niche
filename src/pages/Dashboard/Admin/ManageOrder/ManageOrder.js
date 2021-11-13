import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DashboardTopNav from '../../../Shared/DashboardTopNav/DashboardTopNav';
import LoaderSpin from '../../../Shared/LoaderSpin/LoaderSpin';
import ModalConfirm from '../../../Shared/ModalConfirm/ModalConfirm';
import SuccessAlert from '../../../Shared/SuccessAlert/SuccessAlert';
import ManageSingle from './ManageSingle';

const ManageOrder = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState('');
  const [deleteStatus, setDeleteStatus] = useState(false);

  // Close Success
  const closeSuccess = () => {
    setIsSuccess(false);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://localhost:5000/orders')
      .then((res) => {
        setAllOrders(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [deleteStatus]);

  // show modal
  const handleModal = (orderId) => {
    setProductId(orderId);
    setShowModal(true);
  };
  // close modal
  const closeModal = () => {
    setShowModal(false);
  };
  // delete order
  const deleteProduct = (ordId) => {
    setIsLoading(true);
    axios
      .delete(`http://localhost:5000/orders/${ordId}`)
      .then((res) => {
        if (res.data.deletedCount === 1) {
          setIsSuccess(true);
          setDeleteStatus(!deleteStatus);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    setShowModal(false);
  };

  // Change order status
  const changeStatus = (ordId) => {
    let data = { status: 'shipped' };
    axios
      .put(`http://localhost:5000/ordersStatus/${ordId}`, data)
      .then((res) => {
        if (res.data) {
          setDeleteStatus(!deleteStatus);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex-1">
      <DashboardTopNav />
      <div className="bg-gray-100 m-4 p-2 rounded shadow">
        <h3 className="text-center font-bold text-gray-800 text-2xl">
          Manage order
        </h3>
      </div>
      {/* Page Body */}
      <div className="bg-gray-100 m-4 p-2 rounded shadow">
        {isSuccess && (
          <div className="w-full md:w-4/5 mx-auto my-4">
            <SuccessAlert
              message="Order Deleted Successfully!!!"
              closeSuccess={closeSuccess}
            ></SuccessAlert>
          </div>
        )}
        {isLoading ? (
          <LoaderSpin />
        ) : (
          <table className="w-full md:w-4/5 mx-auto text-center border-collapse border border-green-800">
            <thead>
              <tr>
                <th className="border border-green-600 p-2">#No</th>
                <th className="border border-green-600 p-2">Product Name</th>
                <th className="border border-green-600 p-2">Quantity</th>
                <th className="border border-green-600 p-2">Image</th>
                <th className="border border-green-600 p-2">Price</th>
                <th className="border border-green-600 p-2">Status</th>
                <th className="border border-green-600 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((allOrder, index) => (
                <ManageSingle
                  key={allOrder._id}
                  allOrder={allOrder}
                  handleModal={handleModal}
                  index={index}
                  changeStatus={changeStatus}
                />
              ))}
            </tbody>
          </table>
        )}
        {/* <ModalConfirm /> */}
        {showModal && (
          <ModalConfirm
            showModal={showModal}
            closeModal={closeModal}
            deleteProduct={deleteProduct}
            productId={productId}
          />
        )}
      </div>
    </div>
  );
};

export default ManageOrder;
