import React from "react";
import ReactDOM from "react-dom/client";
import "@/global.css";
import Admin from "@/admin/Admin.tsx";
import RegisteredCat from "@/admin/screen/catalog/category/list/RegisteredCat.tsx";
import CategoryRegister from "@/admin/screen/catalog/category/register/CategoryRegister.tsx";
import RegisteredCatalog from "@/admin/screen/catalog/list/RegisteredCatalog.tsx";
import CatalogRegister from "@/admin/screen/catalog/register/CatalogRegister.tsx";
import Home from "@/admin/screen/home/Home.tsx";
import RegisteredProd from "@/admin/screen/product/list/RegisteredProd.tsx";
import ProductRegister from "@/admin/screen/product/register/ProductRegister.tsx";
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

          {/* register */}
          <Route path="productRegister" element={<ProductRegister />} />
          <Route path="categoryRegister" element={<CategoryRegister />} />
          <Route path="catalogRegister" element={<CatalogRegister />} />

          {/* list */}
          <Route path="registeredProd" element={<RegisteredProd />} />
          <Route path="registeredCategory" element={<RegisteredCat />} />
          <Route path="registeredCatalog" element={<RegisteredCatalog />} />
        </Route>
      </Routes>
    </MemoryRouter>
  </React.StrictMode>,
);
