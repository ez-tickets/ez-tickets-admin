import React from "react";
import ReactDOM from "react-dom/client";
import "@/global.css";
import TitleBar from "@/application/TitleBar.tsx";
import Home from "@/screen/Home/Home.tsx";
import Login from "@/screen/Login/Login.tsx";
import { MemoryRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MemoryRouter>
      <TitleBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </MemoryRouter>
  </React.StrictMode>,
);
