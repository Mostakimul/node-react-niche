import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import LoaderSpin from '../Shared/LoaderSpin/LoaderSpin';
import MainNavBar from '../Shared/Navbar/MainNavbar';
import PageTitle from '../Shared/PageTitle/PageTitle';
import SingleProduct from './SingleProduct';

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://glacial-caverns-54982.herokuapp.com/products')
      .then((res) => {
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
    <div>
      <MainNavBar />
      <PageTitle title="SHOP" />
      <div className="container">
        {isLoading && <LoaderSpin />}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-10">
          {products.map((product) => (
            <SingleProduct key={product._id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
