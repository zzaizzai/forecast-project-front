import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import BaseLayout from "../components/layout/BaseLayout";

import ForecastIndexPage from "../pages/Forecast/ForecastIndexPage";
import ForecastDetailPage from "../pages/Forecast/ForecastDetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import ResultIndexPage from "../pages/results/ResultIndexPage";
import ResultAddPage from "../pages/results/ResultAddPage";

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
                    <Route path="/result" element={<ResultIndexPage></ResultIndexPage>}></Route>
                    <Route path="/result/add" element={<ResultAddPage></ResultAddPage>}></Route>
                    <Route path="/result/detail" element={<h3>result detail</h3>} ></Route>
                    <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>


                </Routes>
            </BaseLayout>
        </BrowserRouter>
    );
};


export default AppRoutes;
