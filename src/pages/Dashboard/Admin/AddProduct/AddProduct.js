import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DashboardTopNav from '../../../Shared/DashboardTopNav/DashboardTopNav';
import LoaderSpin from '../../../Shared/LoaderSpin/LoaderSpin';
import SuccessAlert from '../../../Shared/SuccessAlert/SuccessAlert';

const AddProduct = () => {
  // react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // Close Success
  const closeSuccess = () => {
    setIsSuccess(false);
  };
  // loading and success state
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (data) => {
    setIsLoading(true);
    axios
      .post('https://glacial-caverns-54982.herokuapp.com/products', data)
      .then((res) => {
        console.log(res);
        if (res.data.acknowledged === true) {
          setIsLoading(false);
          setIsSuccess(true);
          reset({});
        }
      })
      .catch((err) => {
        console.log(err);
        setIsSuccess(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex-1">
      <DashboardTopNav />

      {/* Dashboard Titile */}
      <div className="bg-gray-100 m-4 p-2 rounded shadow">
        <h3 className="text-center font-bold text-gray-800 text-2xl">
          Add Product
        </h3>
      </div>
      {/* Page Body */}
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
            {/* Product Name */}
            <label
              htmlFor="name"
              className="block font-display font-medium text-gray-700"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: true })}
              required
              className="input-field"
            />
            <p className="text-red-700">
              {errors.name && <span>This field is required</span>}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex-1 mr-2">
                {/* Product Price */}
                <label
                  htmlFor="price"
                  className="block font-display font-medium text-gray-700"
                >
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  {...register('price', { required: true })}
                  required
                  className="input-field"
                />
                <p className="text-red-700">
                  {errors.price && <span>This field is required</span>}
                </p>
              </div>
              <div className="flex-1 mr-2">
                {/* Product Quantity */}
                <label
                  htmlFor="quantity"
                  className="block font-display font-medium text-gray-700"
                >
                  Quantity
                </label>
                <input
                  type="text"
                  id="quantity"
                  {...register('quantity', { required: true })}
                  required
                  className="input-field"
                />
                <p className="text-red-700">
                  {errors.quantity && <span>This field is required</span>}
                </p>
              </div>
            </div>
            {/* Short Description */}
            <label
              htmlFor="description"
              className="block font-display font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              cols="10"
              rows="5"
              {...register('description', { required: true })}
              required
              className="input-field"
            ></textarea>

            <p className="text-red-700">
              {errors.description && <span>This field is required</span>}
            </p>
            {/* Image Link */}
            <label
              htmlFor="image"
              className="block font-display font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              type="url"
              id="image"
              {...register('image', { required: true })}
              required
              className="input-field"
            />
            <p className="text-red-700">
              {errors.image && <span>This field is required</span>}
            </p>
            {/* Thumbnail url Link */}
            <label
              htmlFor="thumbnail"
              className="block font-display font-medium text-gray-700"
            >
              Thumbnail URL
            </label>
            <input
              type="url"
              id="thumbnail"
              {...register('thumbnail', { required: true })}
              required
              className="input-field"
            />
            <p className="text-red-700">
              {errors.thumbnail && <span>This field is required</span>}
            </p>
            <button className="btn-login">Add Product</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
