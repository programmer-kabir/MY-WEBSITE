import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Share/Navbar/Navbar";
import Footer from "../Share/Footer/Footer";
import Loading from "../Share/Loading/Loading";

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }); 
    }, []);

  return (
    <div className="relative">
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <div className="absolute top-0 w-full z-40">
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
