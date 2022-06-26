import {
    BrowserRouter,
    Routes,
    Route, Navigate,
} from "react-router-dom";
import { pagesRoutes } from "./router"
import React from "react";
function App() {
    return (
        <div className="">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/products" replace/>}
                    />
                    {
                        pagesRoutes.map(
                            (item, index) => (
                                <Route path={item.path} element={<item.layout/>} key={"route-" + index}>
                                    <Route element={<item.component/>} index/>
                                </Route>
                            )
                        )
                    }
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
