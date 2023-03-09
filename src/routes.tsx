import { Routes, Route } from "react-router-dom";
import HomeAdm from "./Pages/pageHomeAdm";
import HomeUser from "./Pages/pageHomeUser";
import LandingPage from "./Pages/pageLanding";
import LoginPage from "./Pages/pageLogin";

export const Router = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/homeUser" element={<HomeUser />} />
    <Route path="/homeAdm" element={<HomeAdm />} />
  </Routes>
);
