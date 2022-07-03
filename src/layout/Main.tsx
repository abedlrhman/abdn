import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/layout/Header";

const Main: React.FunctionComponent = () => {
    return (
        <div>
            <Header />
            <Outlet />
            footer
        </div>
    )
}

export default Main