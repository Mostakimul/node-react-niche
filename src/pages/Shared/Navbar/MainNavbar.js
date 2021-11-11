import React, { useEffect, useState } from 'react';
import DropDown from './DropDown';
import Navbar from './Navbar';

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  }, [isOpen]);
  return (
    <div className="bg-red-50">
      <Navbar isOpen={isOpen} toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
    </div>
  );
};

export default MainNavbar;
