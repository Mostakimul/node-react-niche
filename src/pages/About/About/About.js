import React from 'react';
import team1 from '../../../img/team1.jpg';
import team2 from '../../../img/team2.jpg';
import team3 from '../../../img/team3.jpg';
import team4 from '../../../img/team4.jpg';
import Footer from '../../Shared/Footer/Footer';
import MainNavbar from '../../Shared/Navbar/MainNavbar';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const About = () => {
  return (
    <div>
      <MainNavbar />
      <PageTitle title="About Us" />
      <div className="container">
        <div className="font-display py-10">
          <h2 className="text-center font-semibold text-5xl">Meet Out Team</h2>
          <p className="text-center font-sans text-gray-600">
            Etiam facilisis ligula nec velit posuere egestasnc dictum lectus sem
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div>
            <img src={team1} alt="team" />
            <h3 className="text-center font-display text-2xl py-2">
              Megan Gilbert
            </h3>
            <p className="text-center text-gray-600 text-lg">
              Olive Oil Sommelier
            </p>
          </div>
          <div>
            <img src={team2} alt="team" />
            <h3 className="text-center font-display text-2xl py-2">
              Patricia Hawkins t
            </h3>
            <p className="text-center text-gray-600 text-lg">
              Olive Oil Sommelier
            </p>
          </div>
          <div>
            <img src={team3} alt="team" />
            <h3 className="text-center font-display text-2xl py-2">
              Jessica Ford
            </h3>
            <p className="text-center text-gray-600 text-lg">
              Olive Oil Expert
            </p>
          </div>
          <div>
            <img src={team4} alt="team" />
            <h3 className="text-center font-display text-2xl py-2">
              Janice Marshall
            </h3>
            <p className="text-center text-gray-600 text-lg">
              Olive Oil Sommelier
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
