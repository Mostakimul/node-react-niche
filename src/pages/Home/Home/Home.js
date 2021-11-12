import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import MainNavbar from '../../Shared/Navbar/MainNavbar';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
  return (
    <div>
      <MainNavbar />
      <Banner />
      <section className="mt-10">
        <Products />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
