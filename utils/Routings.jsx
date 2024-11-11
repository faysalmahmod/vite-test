import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import Home from "../src/components/Home";
import B2B from "../src/services/B2B-Sales";
import WD from "../src/services/WebDevelopment";
import DM from "../src/services/Digital-Marketing";
import BI from "../src/services/Business-Improvement";
import IT from "../src/services/IT-support";
import MM from "../src/services/Marketing-Material";
import Training from "../src/services/Training";
import MD from "../src/services/Material-Distribution";
import ProductsTemp from "../src/portfolioProducts/ProductsTemp";
import app1 from "../src/img/portfolio/app-1.jpg";
import app2 from "../src/img/portfolio/app-2.jpg";
import app3 from "../src/img/portfolio/app-3.jpg";
import product1 from "../src/img/portfolio/product-1.jpg";
import product3 from "../src/img/portfolio/product-3.jpg";
import branding1 from "../src/img/portfolio/branding-1.jpg";
import book1 from "../src/img/portfolio/books-1.jpg";
import book2 from "../src/img/portfolio/books-2.jpg";
import book3 from "../src/img/portfolio/books-3.jpg";
import Hireus from "../src/services/Hireus";

const Routings = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/B2B" element={<B2B />} />
        <Route path="/Business-Improvement" element={<BI />} />
        <Route path="/Digital-Marketing" element={<DM />} />
        <Route path="/IT-support" element={<IT />} />
        <Route path="/hireus" element={<Hireus />} />
        <Route path="/Marketing-Material" element={<MM />} />
        <Route path="/Material-Distribution" element={<MD />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/WebDevelopment" element={<WD/>} />
        <Route path="Marketing-Website/portfolio">
          <Route path="app1" element={<ProductsTemp img={app1} />} />
          <Route path="product1" element={<ProductsTemp img={product1} />} />
          <Route path="brand1" element={<ProductsTemp img={branding1} />} />
          <Route path="book1" element={<ProductsTemp img={book1} />} />
          <Route path="app2" element={<ProductsTemp img={app2} />} />
          <Route path="book3" element={<ProductsTemp img={book3} />} />
          <Route path="product3" element={<ProductsTemp img={product3} />} />
          <Route path="book2" element={<ProductsTemp img={book2} />} />
          <Route path="app3" element={<ProductsTemp img={app3} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routings;
