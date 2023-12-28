import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>

      

      <div className="container-scroller">

        <Sidebar/>
        
        <div className="container-fluid page-body-wrapper">

          <Navbar/>
          
          <div className="main-panel">
            
            <Outlet/>
          </div>
        </div>
      </div>
            <Footer/>



    </>
  );
}

export default Layout;
