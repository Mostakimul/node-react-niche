import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoaderSpin from '../../Shared/LoaderSpin/LoaderSpin';
import SingleProduct from '../../Shop/SingleProduct';

const Products = () => {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://glacial-caverns-54982.herokuapp.com/productsHome')
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
      <div className="container">
        <h2 className="font-display font-semibold text-center text-4xl pt-5">
          Our Products
        </h2>
        {isLoading && <LoaderSpin />}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-10">
          {products.map((product) => (
            <SingleProduct key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
