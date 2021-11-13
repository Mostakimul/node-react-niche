import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MySingleOrder = ({ index, order, handleModal }) => {
  const { _id, productId, status, qty } = order;
  const [product, setProduct] = useState({});
  // fetch product
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${productId}`)
      .then((res) => {
        if (res.data) {
          let orderData = res.data;
          orderData.status = status;
          orderData.qty = qty;
          setProduct(orderData);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <tr>
      <td className="border border-green-600 p-2">{index + 1}</td>
      <td className="border border-green-600 p-2">{product?.name}</td>
      <td className="border border-green-600 p-2">{product?.qty}</td>
      <td className="border border-green-600 p-2">
        <img src={product?.image} alt="product" className="w-10 mx-auto" />
      </td>
      <td className="border border-green-600 p-2">$ {product?.price}</td>
      <td className="border border-green-600 ">
        <span
          className={`${
            product?.status === 'pending' ? 'bg-red-400' : 'bg-blue-400'
          } rounded py-1 px-2 p-2`}
        >
          {product?.status}
        </span>
      </td>
      <td className="border border-green-600 p-2">
        <button
          onClick={() => handleModal(_id)}
          className="py-1 px-2 my-1 md:my-0 mx-1 bg-red-700 hover:bg-red-600 text-sm text-gray-50 rounded shadow"
        >
          Delete order
        </button>
      </td>
    </tr>
  );
};

export default MySingleOrder;
