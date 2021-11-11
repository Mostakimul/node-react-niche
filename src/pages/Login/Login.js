import React from 'react';
import { useForm } from 'react-hook-form';
import Loader from 'react-loader-spinner';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import facebook from '../../img/facebook.png';
import github from '../../img/github.png';
import google from '../../img/google.png';
import MainNavbar from '../Shared/Navbar/MainNavbar';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Login = () => {
  const { authError, user, loginUserWithEmail, isLoading, loginWithGoogle } =
    useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const location = useLocation();
  const onSubmit = (data) => {
    loginUserWithEmail(data.email, data.password, history, location);
  };

  const googleLogin = () => {
    loginWithGoogle(history, location);
  };

  return (
    <div>
      <MainNavbar />
      <PageTitle title="Login" />
      <div className="container py-5 md:w-3/6">
        {/* loader */}
        {isLoading && (
          <div className="flex justify-center">
            <Loader
              type="Puff"
              color="#19752f"
              height={100}
              width={100}
              timeout={3000}
            />
          </div>
        )}
        {/* success */}
        {user?.email && (
          <p className="bg-green-700 text-gray-50 text-center p-1 rounded font-display text-lg">
            User Logged In successfully!!!{' '}
            <svg
              className="w-6 h-6 inline-block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </p>
        )}
        {!user?.email && (
          <>
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
            {/* error */}
            {authError && (
              <p className="bg-red-700 text-gray-50 text-center p-1 my-1 rounded font-display text-lg">
                {authError}
              </p>
            )}
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
                <button onClick={googleLogin} className="icon-form">
                  <img src={google} alt="google" />
                </button>
                <div className="icon-form">
                  <img src={github} alt="github" />
                </div>
                <div className="icon-form">
                  <img src={facebook} alt="facebook" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
