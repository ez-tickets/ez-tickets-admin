import React from "react";
import ReactDOM from "react-dom/client";
import "@/global.css";
import Admin from "@/admin/Admin.tsx";
import ProductList from "@/admin/screen/Product/ProductList.tsx";
import Home from "@/admin/screen/home/Home.tsx";
import CategoryRegister from "@/admin/screen/register/category/CategoryRegister.tsx";
import RegisterList from "@/admin/screen/register/list/RegisterList.tsx";
import RegisteredCategoryList from "@/admin/screen/register/list/registryCategory/RegisteredCategoryList.tsx";
import RegisteredProductList from "@/admin/screen/register/list/registryProd/RegisteredProductList.tsx";
import ProductRegister from "@/admin/screen/register/prod/ProductRegister.tsx";
import TitleBar from "@/application/TitleBar.tsx";
import Login from "@/login/Login.tsx";
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
            <Route
              path="registeredCategoryList"
              element={<RegisteredCategoryList />}
            />
          </Route>
          <Route path="productList" element={<ProductList />} />
        </Route>
      </Routes>
    </MemoryRouter>
  </React.StrictMode>,
);
