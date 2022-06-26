import React from "react";
import {Outlet} from "react-router-dom";

const Main: React.FunctionComponent = () => {
    return (
        <div>
            header
            <Outlet />
            footer
        </div>
    )
}

export default Main