import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const DropDown = ({ isOpen, toggle }) => {
  const { user, logOut } = useAuth();

  return (
    <div
      className={`bg-blue-50 w-2/4 md:w-1/6 space-y-4 pt-8 absolute inset-y-0 left-0 transform md:relative md:hidden transition duration-200 ease-in md:-translate-x-full overflow-y-scroll ${
        isOpen ? '-translate-x-0' : '-translate-x-full'
      }`}
      onClick={toggle}
    >
      <Link className="nav-link" to="/home">
        Home
      </Link>
      <Link className="nav-link" to="/shop">
        Shop
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
      <Link className="nav-link" to="/pricing">
        Pricing
      </Link>
      <Link className="nav-link" to="/contact">
        Contact
      </Link>
      <Link className="nav-link" to="/faq">
        FAQ
      </Link>
      {user?.email ? (
        <>
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
          <span className="text-green-700 block font-display mx-1">
            {user?.displayName}
          </span>
          <button onClick={logOut} className="nav-link" to="/register">
            Logout
          </button>
        </>
      ) : (
        <>
          <Link className="nav-link rounded-b" to="/login">
            Login
          </Link>
          <Link className="nav-link rounded-b" to="/register">
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default DropDown;
