import React from 'react';
import { Link, Outlet } from 'react-router';
import { CgProfile } from "react-icons/cg";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiShoppingBag2Line } from "react-icons/ri";
import { IoBagAddOutline } from "react-icons/io5";
const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Navbar */}
    <nav className="navbar w-full text-black dark:text-white bg-linear-to-r from-amber-100 to-amber-200 dark:bg-linear-to-r dark:from-black dark:to-gray-700 shadow-lg">
      <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
        {/* Sidebar toggle icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
      </label>
      <div className="px-4">User Dashboard</div>
    </nav>
    {/* Page content here */}
    <div className="p-4">
        <Outlet></Outlet>
    </div>
  </div>

  <div className="drawer-side is-drawer-close:overflow-visible">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="flex min-h-full flex-col items-start text-black dark:text-white bg-linear-to-r from-amber-100 to-amber-200 dark:bg-linear-to-r dark:from-black dark:to-gray-700  is-drawer-close:w-14 is-drawer-open:w-64">
      {/* Sidebar content here */}
      <ul className="menu w-full grow">
        {/* List item */}
        <li>
          <Link to='/' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
            {/* Home icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            <span className="is-drawer-close:hidden">Homepage</span>
          </Link>
        </li>

        {/* List item */}
        <li>
          <Link to='/dashboard/profile' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Profile">
            {/* Profile icon */}
            <CgProfile />
            <span className="is-drawer-close:hidden">Profile</span>
          </Link>
        </li>
        {/* my product */}
        <li>
          <Link to='/dashboard/myProduct' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Products">
            {/* Profile icon */}
            <MdOutlineProductionQuantityLimits />
            <span className="is-drawer-close:hidden">My Products</span>
          </Link>
        </li>
        {/* my order */}
        <li>
          <Link to='/dashboard/myOrder' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Oders">
            {/* Profile icon */}
            <RiShoppingBag2Line />
            <span className="is-drawer-close:hidden">My Oders</span>
          </Link>
        </li>
        {/* add products */}
        <li>
          <Link to='/dashboard/addProduct' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Add Products">
            {/* Profile icon */}
            <IoBagAddOutline />
            <span className="is-drawer-close:hidden">Add Products</span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</div>
    );
};

export default DashboardLayout;