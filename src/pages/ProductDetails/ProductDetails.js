import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import LoaderSpin from '../Shared/LoaderSpin/LoaderSpin';
import MainNavBar from '../Shared/Navbar/MainNavbar';
import PageTitle from '../Shared/PageTitle/PageTitle';

const ProductDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    setIsLoading(false);
    axios
      .post(`http://localhost:5000/products/${id}`)
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
  return (
    <div>
      <MainNavBar />
      <PageTitle title="SHOP" />

      <div className="container font-display pt-10">
        {isLoading && <LoaderSpin />}
        {!isLoading && (
          <div className="grid grid-cols-2  gap-10">
            <div>
              <img
                src={product?.image}
                alt={product?.name}
                className="w-3/5 mx-auto"
              />
            </div>
            <div className="pt-10">
              <h2 className="text-5xl">{product?.name}</h2>
              <p className="text-xl text-gray-600 py-5">
                {product?.description}
              </p>
              <p className="text-2xl inline-block mr-2">
                Price: ${product?.price}
              </p>
              <p className="text-2xl inline-block ml-2">
                Left: {product?.quantity} items
              </p>

              <Link to={`/cart/${id}`}>
                <button className="bg-green-500 py-2 px-4 block mt-5 rounded font-semibold shadow">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
