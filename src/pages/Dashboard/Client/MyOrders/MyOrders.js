import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import DashboardTopNav from '../../../Shared/DashboardTopNav/DashboardTopNav';
import LoaderSpin from '../../../Shared/LoaderSpin/LoaderSpin';
import ModalConfirm from '../../../Shared/ModalConfirm/ModalConfirm';
import SuccessAlert from '../../../Shared/SuccessAlert/SuccessAlert';
import MySingleOrder from './MySingleOrder';

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  // states dependency
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);

  // Close Success
  const closeSuccess = () => {
    setIsSuccess(false);
  };
  // show modal
  const handleModal = (orderId) => {
    setProductId(orderId);
    setShowModal(true);
    // console.log(ordId);
  };
  // close modal
  const closeModal = () => {
    setShowModal(false);
  };

  // fecth orders
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://glacial-caverns-54982.herokuapp.com/orders/${user.email}`)
      .then((res) => {
        setOrders(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [deleteStatus]);

  // delete order
  const deleteProduct = (ordId) => {
    setIsLoading(true);
    axios
      .delete(`https://glacial-caverns-54982.herokuapp.com/orders/${ordId}`)
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

  return (
    <div className="flex-1">
      <DashboardTopNav />

      <div className="flex-1">
        <div className="bg-gray-100 m-4 p-2 rounded shadow">
          <h3 className="text-center font-bold text-gray-800 text-2xl">
            My Orders
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
                {orders.map((order, index) => (
                  <MySingleOrder
                    key={order._id}
                    index={index}
                    order={order}
                    handleModal={handleModal}
                  />
                ))}
              </tbody>
            </table>
          )}
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
    </div>
  );
};

export default MyOrders;
