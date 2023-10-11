import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Share/Navbar/Navbar';
import Footer from '../Share/Footer/Footer';
import Loading from '../Share/Loading/Loading';

const MainLayout = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate a loading delay for demonstration purposes
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Change the delay time as needed
    }, []);

    return (
        <div className='relative'>
            {isLoading ? (
                // Render a loading indicator (e.g., a spinner) while loading
                <div>
                    <Loading />
                </div>
            ) : (
                // Render the Navbar and content when not loading
                <div>
                    <div className='absolute top-0 w-full z-40'>
                        <Navbar />
                    </div>
                    <div>
                        <Outlet />
                    </div>
                       <Footer />
                </div>
            )}
         
        </div>
    );
};

export default MainLayout;
