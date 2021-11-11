import React from 'react';
import { Link } from 'react-router-dom';

const DropDown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-cols-1 mx-4 rounded shadow sm:w-2/3 sm:mx-auto transition duration-500 ease-in text-center items-center bg-red-200'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link className="nav-link rounded-t" to="/home">
        Home
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
      <Link className="nav-link rounded-b" to="/faq">
        FAQ
      </Link>
      <Link className="nav-link rounded-b" to="/login">
        Login
      </Link>
      <Link className="nav-link rounded-b" to="/register">
        Register
      </Link>
    </div>
  );
};

export default DropDown;
