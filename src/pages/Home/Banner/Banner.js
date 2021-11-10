import React from 'react';
import banner1 from '../../../img/banner-1.png';

const Banner = () => {
  return (
    <div className="bg-red-50 h-screen md:flex md:items-center bg-hero-bg bg-no-repeat bg-right-top bg-blend-darken">
      <div className="container py-10 md:grid md:grid-cols-3 justify-center items-center">
        <div>
          <h1 className="font-display text-5xl lg:text-7xl">
            Quality oils for cooking & seasoning
          </h1>
          <h2 className="font-display text-2xl py-4 md:hidden">
            Award-Wining <br />
            Authentic Olive Oils
          </h2>
        </div>
        <img src={banner1} alt="Banner" className="w-3/4 md:w-full mx-auto" />
        {/* list */}
        <div className="py-7">
          <h2 className="font-display md:text-3xl lg:text-5xl py-4 hidden md:block md:text-center">
            Award-Wining <br />
            Authentic Olive Oils
          </h2>
          <p className="flex items-center justify-center font-display text-2xl">
            <svg
              className="w-7 h-7 inline-block text-green-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>{' '}
            500ml
          </p>
          <p className="flex items-center justify-center font-display text-2xl">
            <svg
              className="w-7 h-7 inline-block text-green-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>{' '}
            18 year aged
          </p>
          <p className="flex items-center justify-center font-display text-2xl">
            <svg
              className="w-7 h-7 inline-block text-green-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>{' '}
            Limited adition
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
