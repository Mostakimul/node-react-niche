import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import facebook from '../../img/facebook.png';
import github from '../../img/github.png';
import google from '../../img/google.png';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <PageTitle title="Login" />
      <div className="container py-5 md:w-3/6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
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
          {/* Password */}
          <label
            htmlFor="password"
            className="block font-display font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register('password', { required: true, min: 6 })}
            name="password"
            required
            className="input-field"
          />
          <p className="text-red-700">
            {errors.password && <span>This field is required</span>}
          </p>
          {/* Button */}
          <button className="btn-login">Login</button>
        </form>
        <h2 className="font-semibold text-center py-2 text-green-800">
          {' '}
          <Link to="/register">Don't have an account? Register here</Link>
        </h2>
        <h3 className="text-center py-4">
          <span>----- </span>
          Or sign in with <span> -----</span>
        </h3>
        <div className="bg-white max-w-lg py-2.5 mx-auto rounded-md shadow-md">
          <div className="flex items-center justify-center">
            <div className="icon-form">
              <img src={google} alt="google" />
            </div>
            <div className="icon-form">
              <img src={github} alt="github" />
            </div>
            <div className="icon-form">
              <img src={facebook} alt="facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
