import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Main: React.FunctionComponent = () => {
    return (
        <div>
            <Header />
            <Outlet />
           <Footer/>
        </div>
    )
}

export default Main