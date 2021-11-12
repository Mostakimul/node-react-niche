import React from 'react';
import facebook from '../../../img/facebook.png';
import footerImg from '../../../img/footer-img.png';
import google from '../../../img/google.png';

const Footer = () => {
  return (
    <div className="font-display pt-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="md:col-span-2">
            <h2 className="text-4xl">Get in Touch</h2>
            <p className="text-red-500 text-xl pt-5">amfisaa@admin.net</p>
            <img src={footerImg} alt="footer" />
          </div>
          <div>
            <h2 className="text-4xl">Customer Services</h2>
            <ul className="list-disc pl-4 text-xl text-red-500 py-5">
              <li>About</li>
              <li>Shop</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h2 className="text-4xl">Our Socials</h2>
            <p className="text-red-500 text-xl pt-5">
              Follow us on social media and keep up with our latest posts
            </p>
            <img
              src={facebook}
              alt="facebook"
              className="inline-block mx-3 mt-3"
            />
            <img
              src={google}
              alt="facebook"
              className="inline-block mx-3 mt-3"
            />
          </div>
        </div>
        <div>
          <h6 className="text-lg text-center py-5">
            Copyright&#169; Mostakimul Karim{' '}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
