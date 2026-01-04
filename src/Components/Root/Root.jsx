import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer/>

        </div>
    );
};

export default Root;