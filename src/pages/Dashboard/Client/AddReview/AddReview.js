import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import DashboardTopNav from '../../../Shared/DashboardTopNav/DashboardTopNav';
import LoaderSpin from '../../../Shared/LoaderSpin/LoaderSpin';
import SuccessAlert from '../../../Shared/SuccessAlert/SuccessAlert';

const AddReview = () => {
  const { user } = useAuth();
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

  // add review
  const onSubmit = (data) => {
    setIsLoading(true);
    data.email = user.email;
    axios
      .post('http://localhost:5000/reviews', data)
      .then((res) => {
        if (res.data.acknowledged === true) {
          setIsSuccess(true);
        }
        reset({});
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex-1">
      <DashboardTopNav />
      <div className="bg-gray-100 m-4 p-2 rounded shadow">
        <h3 className="text-center font-bold text-gray-800 text-2xl">
          Add Review
        </h3>
      </div>
      <div className="bg-gray-100 md:w-3/5 md:mx-auto m-4 p-2 rounded shadow">
        {isSuccess && (
          <SuccessAlert
            message="Review added as admin success!!!"
            closeSuccess={closeSuccess}
          ></SuccessAlert>
        )}
        {isLoading ? (
          <LoaderSpin />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 p-5">
            {/* Review Description */}
            <label
              htmlFor="review"
              className="block font-display font-medium text-gray-700"
            >
              Review
            </label>
            <textarea
              id="review"
              cols="10"
              rows="5"
              {...register('review', { required: true })}
              required
              className="input-field"
            ></textarea>

            <p className="text-red-700">
              {errors.review && <span>This field is required</span>}
            </p>
            {/* Rating Number */}
            <label
              htmlFor="rating"
              className="block font-display font-medium text-gray-700"
            >
              Rating (1 - 5)
            </label>
            <input
              type="number"
              id="rating"
              {...register('rating', { required: true, min: 0, max: 5 })}
              required
              className="input-field"
            />
            <p className="text-red-700">
              {errors.rating && <span>This field is required</span>}
            </p>
            <button className="btn-login">Add Review</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddReview;
