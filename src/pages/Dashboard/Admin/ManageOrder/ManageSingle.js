import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageSingle = ({ allOrder, index, handleModal, changeStatus }) => {
  const { _id, productId, status, qty } = allOrder;
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
      <td className="border border-green-600 p-2">{product.name}</td>
      <td className="border border-green-600 p-2">{product.qty}</td>
      <td className="border border-green-600 p-2">
        <img src={product.thumbnail} alt="product" className="w-10 mx-auto" />
      </td>
      <td className="border border-green-600 p-2">$ {product.price}</td>
      <td className="border border-green-600 ">
        <button
          className={`${
            product.status === 'pending' ? 'bg-red-400' : 'bg-blue-400'
          }  py-1 px-2 p-2 mx-1 text-sm text-gray-50 rounded shadow`}
        >
          {product.status}
        </button>
        {product.status === 'pending' && (
          <button
            onClick={() => changeStatus(_id)}
            className="py-1 px-2 my-1 md:my-0 mx-1 bg-green-700 hover:bg-green-600 text-sm text-gray-50 rounded shadow"
          >
            Change Status
          </button>
        )}
      </td>
      <td className="border border-green-600 p-2">
        <button
          onClick={() => handleModal(_id)}
          className="py-1 px-2 my-1 md:my-0 mx-1 bg-red-700 hover:bg-red-600 text-sm text-gray-50 rounded shadow"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageSingle;
