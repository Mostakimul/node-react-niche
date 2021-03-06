import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
  const { name, thumbnail, price, quantity, description } = product;

  return (
    <div className="bg-red-50 md:m-5 rounded-sm shadow transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
      <div>
        <img src={thumbnail} alt={name} className="w-3/4 mx-auto" />
      </div>
      <div className="text-center bg-gray-50 m-2 p-2 rounded shadow">
        <h2 className="font-display font-semibold text-xl">{name}</h2>
        <div className="flex justify-around items-center my-2">
          <p className="font-display text-base">Price: ${price}</p>
          <p className="font-display text-base">Qty: {quantity}</p>
        </div>
        <p className="text-left font-display text-base text-gray-600 py-1 px-2">
          {description.slice(0, 95)}...
        </p>
      </div>
      <div className="m-2">
        <Link to={`/product/${product._id}`}>
          <button className="font-display py-1.5 text-lg bg-green-500 hover:bggren block w-full rounded shadow">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
