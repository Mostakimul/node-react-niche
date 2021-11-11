import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
const Dashboard = () => {
  const [isdashOpen, setIsDashOpen] = useState(true);
  const showSideBar = () => {
    setIsDashOpen(!isdashOpen);
  };

  return (
    <div className="relative min-h-screen md:flex">
      {/* mobile menu bar */}
      <div className="container md:hidden">
        <div className="flex justify-between">
          {/* logo */}
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className="w-2/4 md:h-3/4 p-1" />
            </Link>
          </div>

          {/* mobile menu butn */}
          <button onClick={showSideBar} className="cursor-pointer md:hidden">
            {isdashOpen ? (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-red-50 w-2/4 md:w-1/6 space-y-6 absolute inset-y-0 left-0 transform md:relative transition duration-200 ease-in md:translate-x-0 ${
          isdashOpen ? '-translate-x-full' : '-translate-x-0'
        }`}
      >
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="w-2/4 mx-auto md:h-3/4 p-1" />
          </Link>
        </div>
        <nav onClick={showSideBar}>
          <Link to="/" className="dash-icon">
            My Orders
          </Link>
          <Link to="/" className="dash-icon">
            Review
          </Link>
          <Link to="/" className="dash-icon">
            Pay Now
          </Link>
          <Link to="/" className="dash-icon">
            Logout
          </Link>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="bg-gray-100 m-4 p-2 rounded shadow">
          <h3>Content</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
