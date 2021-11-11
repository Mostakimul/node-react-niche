import React from 'react';

const RejectAlert = ({ message }) => {
  return (
    <p className="bg-red-700 text-gray-50 text-center p-1 my-1 rounded font-display text-lg">
      {message}
    </p>
  );
};

export default RejectAlert;
