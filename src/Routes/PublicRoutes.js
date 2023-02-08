import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Components/Layouts/Index";
const Portfolio = lazy(() => import("../Pages/PortfolioPages/Portfolio"));
const PublicRoutes = () => {
  return (
    <Layout>
      <Suspense fallback={<h1 align="center">Loading .... </h1>}>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default PublicRoutes;
