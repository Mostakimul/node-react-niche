import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import MainNavbar from '../../Shared/Navbar/MainNavbar';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
  return (
    <div>
      <MainNavbar />
      <Banner />
      <section className="mt-10">
        <Products />
      </section>
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
