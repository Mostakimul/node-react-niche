import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import MainNavbar from '../../Shared/Navbar/MainNavbar';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Contact = () => {
  return (
    <div>
      <MainNavbar />
      <PageTitle title="Contact Us" />
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-display font-semibold text-3xl">
              Get in Touch
            </h3>
            <p className="text-gray-600 text-lg py-5">
              Integer ac interdum lacus. Nunc porta semper lacus a varius.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.{' '}
            </p>
            <p className="text-gray-600 text-lg">
              Nunc sagittis consectetur velit, ac gravida nunc gravida et.
              Vestibulum at eros imperdiet, volutpat nunc vitae, ornare erat.
              Proin interdum aliquet porta. Fusce ut semper ligula.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
              <div className="space-y-2">
                <div className="text-red-400 flex items-center">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="text-lg mx-2">(374)635-9332</p>
                </div>
                <div className="text-red-400 flex items-center">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <p className="text-lg mx-2">amiass@admin.com</p>
                </div>
                <div className="text-red-400 flex items-center">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-lg mx-2">Milan, Italy</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-red-400 flex items-center">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="text-lg mx-2">(374)636-9332</p>
                </div>
                <div className="text-red-400 flex items-center">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <p className="text-lg mx-2">amiass@admin.com</p>
                </div>
                <div className="text-red-400 flex items-center">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-lg mx-2">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold text-3xl">
              We love to hear from you!
            </h3>
            <form className="space-y-3 p-5">
              {/* Product Name */}
              <label
                htmlFor="name"
                className="block text-xl font-display font-medium text-gray-700"
              >
                Name
              </label>
              <input type="text" id="name" required className="input-field" />

              {/* Short Description */}
              <label
                htmlFor="description"
                className="block text-xl font-display font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                cols="10"
                rows="5"
                required
                className="input-field"
              ></textarea>

              {/* Image Link */}
              <label
                htmlFor="email"
                className="block text-xl font-display font-medium text-gray-700"
              >
                Email
              </label>
              <input type="email" id="email" required className="input-field" />
              <button className="btn-contact">Contact Us</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
