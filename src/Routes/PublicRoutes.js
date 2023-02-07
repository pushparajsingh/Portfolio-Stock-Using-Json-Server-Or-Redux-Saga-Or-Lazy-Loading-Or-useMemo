import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Components/Layouts/Index";
import Portfolio from "../Pages/PortfolioPages/Portfolio";

const PublicRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Layout>
  );
};

export default PublicRoutes;
