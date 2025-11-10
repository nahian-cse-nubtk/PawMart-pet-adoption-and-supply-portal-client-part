import React from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../Hooks/useAuth";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";

const Navbar = () => {
    const {user}=useAuth();
    console.log(user);

    const links=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/pets-supplies'>Pets & Supplies</NavLink></li>
    {
        <>
            <li><NavLink to='/add-listing'>Add Listing/Products</NavLink></li>
            <li><NavLink to='/my-listings'>My Listings/Products</NavLink></li>
            <li><NavLink to='/my-orders'>My Orders</NavLink></li>
        </>
    }
    </>
  return (
    <div className="navbar text-white bg-linear-to-r from-amber-500 to-orange-600 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}

          </ul>
        </div>
        <h1 className="text-2xl font-bold tracking-wide flex items-center gap-1">
          🐾 <span className="font-extrabold text-white drop-shadow">PawMart</span>
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {links}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="font-bold space-x-1">
            {
                user?<ProfileDropdown/>:<>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
                </>
            }

        </div>
      </div>
    </div>
  );
};

export default Navbar;
