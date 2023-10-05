import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Share/Navbar/Navbar';
import Footer from '../Pages/Share/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='relative'>
            <div className='absolute top-0 w-full z-40'>
                <Navbar />
            </div>
            <div>
                <Outlet />
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default MainLayout;