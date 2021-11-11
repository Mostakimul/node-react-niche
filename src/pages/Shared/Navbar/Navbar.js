import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../img/logo.png';

const Navbar = ({ toggle, isOpen }) => {
  const { user, logOut } = useAuth();
  return (
    <nav className="container">
      <div
        className="flex justify-between items-center h-16 text-gray-900 relative shadow-sm"
        role="navigation"
      >
        <Link to="/home">
          <img src={logo} alt="Logo" className="w-2/4 md:h-3/4 p-1" />
        </Link>
        <div onClick={toggle} className="px-4 cursor-pointer md:hidden">
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
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
        </div>
        <div className="pr-8 md:block hidden">
          <Link className="desktop-link" to="/home">
            Home
          </Link>
          <Link className="desktop-link" to="/about">
            About
          </Link>
          <Link className="desktop-link" to="/pricing">
            Pricing
          </Link>
          <Link className="desktop-link" to="/contact">
            Contact
          </Link>
          <Link className="desktop-link" to="/faq">
            FAQ
          </Link>
          {user?.email ? (
            <>
              <span className="text-green-700 font-display mx-1">
                {user?.displayName}
              </span>
              <button onClick={logOut} className="desktop-link" to="/register">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="desktop-link" to="/login">
                Login
              </Link>
              <Link className="desktop-link" to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
