import React from 'react';
import MainNavbar from '../../Shared/Navbar/MainNavbar';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
  return (
    <div>
      <MainNavbar />
      <Banner />
      <Products />
    </div>
  );
};

export default Home;
