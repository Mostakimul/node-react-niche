import React from 'react';

const SingleProduct = ({ product }) => {
  const { name, image, price, quantity } = product;
  return (
    <div className="bg-red-50 md:m-10 rounded-sm shadow transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
      <div>
        <img src={image} alt={name} className="w-3/4 mx-auto" />
      </div>
      <div className="text-center bg-gray-50 m-2 p-2 rounded shadow">
        <h2 className="font-display font-semibold text-xl">{name}</h2>
        <div className="flex justify-around items-center my-2">
          <p className="font-display text-base">Price: ${price}</p>
          <p className="font-display text-base">Qty: {quantity}</p>
        </div>
      </div>
      <div className="m-2">
        <button className="font-display text-lg bg-green-500 hover:bggren block w-full rounded shadow">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
