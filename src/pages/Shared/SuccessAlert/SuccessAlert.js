import React from 'react';

const SuccessAlert = ({ message, closeSuccess }) => {
  return (
    <p className="bg-green-700 text-gray-50 text-center relative p-1 rounded font-display text-lg">
      {message}
      <button onClick={() => closeSuccess()} className="absolute right-2">
        <svg
          className="w-6 h-6 inline-block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </button>
    </p>
  );
};

export default SuccessAlert;
