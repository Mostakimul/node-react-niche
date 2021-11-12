import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DashboardTopNav from '../../../Shared/DashboardTopNav/DashboardTopNav';
import LoaderSpin from '../../../Shared/LoaderSpin/LoaderSpin';
import SingleProduct from './SingleProduct';

const ManageProduct = () => {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://localhost:5000/products')
      .then((res) => {
        // console.log(res.data);
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex-1">
      <DashboardTopNav />
      {/* Page Title */}
      <div className="bg-gray-100 m-4 p-2 rounded shadow">
        <h3 className="text-center font-bold text-gray-800 text-2xl">
          Manage Product
        </h3>
      </div>
      {/* Page Body */}
      <div className="bg-gray-100 m-4 p-2 rounded shadow">
        {isLoading ? (
          <LoaderSpin />
        ) : (
          <table className="w-4/5 mx-auto text-center border-collapse border border-green-800">
            <thead>
              <tr>
                <th className="border border-green-600 p-2">#No</th>
                <th className="border border-green-600 p-2">Product Name</th>
                <th className="border border-green-600 p-2">Quantity</th>
                <th className="border border-green-600 p-2">Image</th>
                <th className="border border-green-600 p-2">Price</th>
                <th className="border border-green-600 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <SingleProduct
                  key={product._id}
                  product={product}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManageProduct;
