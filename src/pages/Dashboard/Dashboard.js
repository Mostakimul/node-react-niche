import React, { useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import logo from '../../img/logo.png';
import AddProduct from './Admin/AddProduct/AddProduct';
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';
import ManageOrder from './Admin/ManageOrder/ManageOrder';
import ManageProduct from './Admin/ManageProduct/ManageProduct';
import DashboardHome from './DashboardHome/DashboardHome';

const Dashboard = () => {
  const [isdashOpen, setIsDashOpen] = useState(true);
  const showSideBar = () => {
    setIsDashOpen(!isdashOpen);
  };
  let { path, url } = useRouteMatch();

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
          <Link to={`${url}`} className="dash-icon">
            Dashboard
          </Link>
          <Link to={`${url}/make-admin`} className="dash-icon">
            Make Admin
          </Link>
          <Link to={`${url}/add-product`} className="dash-icon">
            Add Product
          </Link>
          <Link to={`${url}/manage-orders`} className="dash-icon">
            Manage All Orders
          </Link>
          <Link to={`${url}/manage-product`} className="dash-icon">
            Manage Product
          </Link>
          <Link to="/" className="dash-icon md:hidden">
            Logout
          </Link>
        </nav>
      </div>

      {/* Nested Routes */}
      <Switch>
        <Route exact path={path}>
          <DashboardHome />
        </Route>
        <Route path={`${path}/make-admin`}>
          <MakeAdmin />
        </Route>
        <Route path={`${path}/add-product`}>
          <AddProduct />
        </Route>
        <Route path={`${path}/manage-orders`}>
          <ManageOrder />
        </Route>
        <Route path={`${path}/manage-product`}>
          <ManageProduct />
        </Route>
      </Switch>
    </div>
  );
};

export default Dashboard;
