import React from "react";
import ReactDOM from "react-dom/client";
import "@/global.css";
import Admin from "@/admin/Admin.tsx";
import RegisteredCat from "@/admin/screen/category/RegisteredCat.tsx";
import RegisteredCtlg from "@/admin/screen/category/catalog/list/RegisteredCtlg.tsx";
import Home from "@/admin/screen/home/Home.tsx";
import RegisteredProd from "@/admin/screen/product/RegisteredProd.tsx";
import TitleBar from "@/application/TitleBar.tsx";
import Login from "@/login/Login.tsx";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MemoryRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
        transition={Bounce}
      />
      <TitleBar />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="admin" element={<Admin />}>
          <Route index element={<Home />} />
          <Route path="registeredProd" element={<RegisteredProd />} />
          <Route path="registeredCategory" element={<RegisteredCat />} />
          <Route path="registeredCatalog" element={<RegisteredCtlg />} />
        </Route>
      </Routes>
    </MemoryRouter>
  </React.StrictMode>,
);
