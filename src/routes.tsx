import { Routes, Route } from "react-router-dom";
import HomeAdm from "./Pages/pageHomeAdm";
import HomeUser from "./Pages/pageHomeUser";
import LandingPage from "./Pages/pageLanding";
import LoginPage from "./Pages/pageLogin";
import { ProtectedRoutes } from "./Pages/ProtectedRoutes";

export const Router = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/homeUser" element={<ProtectedRoutes />}>
      <Route index element={<HomeUser />} />
    </Route>
    <Route path="/homeAdm" element={<ProtectedRoutes />}>
      <Route index element={<HomeAdm />} />
    </Route>
  </Routes>
);

export default Router;
