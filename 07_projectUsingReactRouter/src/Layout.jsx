import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
        <Header />
        {/* header, footer will be same, but their value will change using outlet */}
        <Outlet /> 
        <Footer />
        </>
    )
}

export default Layout