import React from "react";
import ReactDOM from "react-dom/client";
import "@/global.css";
import Login from "@/Login/Login.tsx";
import Admin from "@/admin/Admin.tsx";
import Home from "@/admin/screen/Home/Home.tsx";
import ProductList from "@/admin/screen/Product/ProductList.tsx";
import CategoryRegister from "@/admin/screen/Register/Category/CategoryRegister.tsx";
import RegisterList from "@/admin/screen/Register/List/RegisterList.tsx";
import RegisteredProductList from "@/admin/screen/Register/List/components/RegisteredProductList.tsx";
import ProductRegister from "@/admin/screen/Register/Prod/ProductRegister.tsx";
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
          <Route path="categoryRegister" element={<CategoryRegister />} />
          <Route path="registerList" element={<RegisterList />}>
            <Route index element={<RegisteredProductList />} />
          </Route>
          <Route path="productList" element={<ProductList />} />
        </Route>
      </Routes>
    </MemoryRouter>
  </React.StrictMode>,
);
