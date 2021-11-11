import React from 'react';
import { useForm } from 'react-hook-form';
import DashboardTopNav from '../../../Shared/DashboardTopNav/DashboardTopNav';

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
      </div>
    </div>
  );
};

export default MakeAdmin;
