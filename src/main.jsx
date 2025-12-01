import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HarapanPage from "./pages/HarapanPage";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/harapan" element={<HarapanPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
