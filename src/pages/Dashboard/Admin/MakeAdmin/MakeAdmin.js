import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import DashboardTopNav from '../../../Shared/DashboardTopNav/DashboardTopNav';
import LoaderSpin from '../../../Shared/LoaderSpin/LoaderSpin';
import SuccessAlert from '../../../Shared/SuccessAlert/SuccessAlert';

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { token } = useAuth();

  const closeSuccess = () => {
    setIsSuccess(false);
  };

  const onSubmit = (data) => {
    setIsLoading(true);
    axios
      .put('http://localhost:5000/addAdmin', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.acknowledged) {
          setIsLoading(false);
          setIsSuccess(true);
        }
        reset({});
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  return (
    <div className="flex-1">
      <DashboardTopNav />
      <div className="bg-gray-100 m-4 p-2 rounded shadow">
        <h3 className="text-center font-bold text-gray-800 text-2xl">
          Make Admin
        </h3>
      </div>

      <div className="bg-gray-100 md:w-3/5 md:mx-auto m-4 p-2 rounded shadow">
        {isSuccess && (
          <SuccessAlert
            message="User added as admin success!!!"
            closeSuccess={closeSuccess}
          ></SuccessAlert>
        )}
        {isLoading ? (
          <LoaderSpin />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 p-5">
            {/* Email */}
            <label
              htmlFor="email"
              className="block font-display font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              {...register('email', { required: true })}
              required
              className="input-field"
            />
            <p className="text-red-700">
              {errors.email && <span>This field is required</span>}
            </p>

            <button className="btn-login">Add Admin</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MakeAdmin;
