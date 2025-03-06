import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import CardPage from "./pages/CardPage";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ProductPage />} />
          <Route path="card" element={<CardPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
