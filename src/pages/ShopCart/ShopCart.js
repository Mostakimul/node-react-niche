import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import LoaderSpin from '../Shared/LoaderSpin/LoaderSpin';
import MainNavbar from '../Shared/Navbar/MainNavbar';
import PageTitle from '../Shared/PageTitle/PageTitle';
import SuccessAlert from '../Shared/SuccessAlert/SuccessAlert';

const ShopCart = () => {
  const { id } = useParams();
  // react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // user
  const { user } = useAuth();

  // fetching product
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  // Close Success
  const closeSuccess = () => {
    setIsSuccess(false);
  };

  // Shipping details
  const onSubmit = (data) => {
    data.email = user.email;
    data.productId = id;
    data.qty = 1;
    data.status = 'pending';

    setIsLoading(true);
    axios
      .post('http://localhost:5000/order', data)
      .then((res) => {
        if (res.data.acknowledged === true) {
          setIsLoading(false);
          setIsSuccess(true);
          reset({});
        }
      })
      .catch((err) => {
        console.log(err);
        setIsSuccess(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <MainNavbar />
      <PageTitle title="Cart" />

      <div className="container font-display py-10">
        <h2 className="font-semibold text-center text-4xl pt-5">Shipping</h2>
        {isSuccess && (
          <div className="w-full md:w-2/4 md:mx-auto py-5">
            <SuccessAlert
              message="User added as admin success!!!"
              closeSuccess={closeSuccess}
            ></SuccessAlert>
          </div>
        )}
        {isLoading ? (
          <LoaderSpin />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h3 className="font-semibold text-center text-2xl pt-5">
                Product
              </h3>
              <form className="space-y-3 p-5">
                {/* Product Name */}
                <label
                  htmlFor="name"
                  className="block font-display font-medium text-gray-700"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  disabled
                  value={product.name}
                  className="input-field text-gray-500 cursor-not-allowed"
                />
                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-2">
                    {/* Product Price */}
                    <label
                      htmlFor="price"
                      className="block font-display font-medium text-gray-700"
                    >
                      Price
                    </label>
                    <input
                      type="text"
                      id="price"
                      disabled
                      value={product.price}
                      className="input-field text-gray-500 cursor-not-allowed"
                    />
                  </div>
                  <div className="flex-1 mr-2">
                    {/* Product Quantity */}
                    <label
                      htmlFor="quantity"
                      className="block font-display font-medium text-gray-700"
                    >
                      Quantity
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      disabled
                      value="1"
                      className="input-field text-gray-500 cursor-not-allowed"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div>
              <h3 className="font-semibold text-center text-2xl pt-5">
                Your Details
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 p-5">
                {/* Your Name */}
                <label
                  htmlFor="name"
                  className="block font-display font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  disabled
                  value={user.displayName}
                  className="input-field text-gray-600 cursor-not-allowed"
                />
                {/* Your Email */}
                <label
                  htmlFor="name"
                  className="block font-display font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="text"
                  id="name"
                  disabled
                  value={user.email}
                  className="input-field text-gray-600 cursor-not-allowed"
                />
                {/* Address */}
                <label
                  htmlFor="name"
                  className="block font-display font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  {...register('address', { required: true })}
                  required
                  className="input-field"
                />
                <p className="text-red-700">
                  {errors.address && <span>This field is required</span>}
                </p>
                {/* Phone */}
                <label
                  htmlFor="phone"
                  className="block font-display font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  {...register('phone', { required: true })}
                  required
                  className="input-field"
                />
                <p className="text-red-700">
                  {errors.phone && <span>This field is required</span>}
                </p>

                <button className="btn-login">Buy</button>
              </form>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ShopCart;
