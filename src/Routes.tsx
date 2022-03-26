import React, {FC} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Homepage from "./pages/Homepage";
import CatsPage from "./pages/CatsPage";

interface RouteProps {

}

const AppRoutes: FC<RouteProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/CatsPage" element={<CatsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;