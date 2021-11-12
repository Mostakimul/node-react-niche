import React from 'react';

const SingleProduct = ({ product, index, handleModal }) => {
  return (
    <tr>
      <td className="border border-green-600 p-2">{index + 1}</td>
      <td className="border border-green-600 p-2">{product.name}</td>
      <td className="border border-green-600 p-2">{product.quantity}</td>
      <td className="border border-green-600 p-2">
        <img src={product.image} alt="product" className="w-10 mx-auto" />
      </td>
      <td className="border border-green-600 p-2">$ {product.price}</td>
      <td className="border border-green-600 p-2">
        <button className="py-1 px-2 mx-1 bg-blue-700 hover:bg-blue-600 text-sm text-gray-50 rounded shadow">
          Edit
        </button>
        <button
          onClick={() => handleModal(product?._id)}
          className="py-1 px-2 my-1 md:my-0 mx-1 bg-red-700 hover:bg-red-600 text-sm text-gray-50 rounded shadow"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SingleProduct;
