import React from "react";
import ReactDOM from "react-dom/client";
import "@/global.css";
import Login from "@/Login/Login.tsx";
import Admin from "@/admin/Admin.tsx";
import CategoryList from "@/admin/screen/Category/CategoryList.tsx";
import Home from "@/admin/screen/Home/Home.tsx";
import ProductList from "@/admin/screen/Product/ProductList.tsx";
import ProductRegister from "@/admin/screen/Register/ProductRegister.tsx";
import TitleBar from "@/application/TitleBar.tsx";
import { MemoryRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MemoryRouter>
      <TitleBar />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="admin" element={<Admin />}>
          <Route index element={<Home />} />
          <Route path="productRegister" element={<ProductRegister />} />
          <Route path="categoryRegister" element={<CategoryList />} />
          <Route path="productList" element={<ProductList />} />
          <Route path="categoryList" element={<CategoryList />} />
        </Route>
      </Routes>
    </MemoryRouter>
  </React.StrictMode>,
);
