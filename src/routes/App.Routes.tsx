import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import BaseLayout from "../components/layout/BaseLayout";

import ForecastIndexPage from "../pages/Forecast/ForecastIndexPage";
import ForecastDetailPage from "../pages/Forecast/ForecastDetailPage";


const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <BaseLayout>
                <Routes>

                    {/* index page */}
                    <Route path="/" element={<h1>Home</h1>} />

                    {/* for test */}
                    <Route path="/test" element={<h1>test</h1>} />

                    {/* forecast */}
                    <Route path="/forecast" element={<ForecastIndexPage></ForecastIndexPage>}></Route>
                    <Route path="/forecast/detail" element={<ForecastDetailPage></ForecastDetailPage>}></Route>

                    {/* result */}
                    <Route path="/result" element={<h3>result</h3>}></Route>
                    <Route path="/result/detail" element={<h3>result detail</h3>} ></Route>

                </Routes>
            </BaseLayout>
        </BrowserRouter>
    );
};


export default AppRoutes;
