import { Routes, Route } from "react-router-dom";
import HomeAdm from "./Pages/PageHome/pageHomeAdm";
<<<<<<< HEAD

=======
>>>>>>> 66dd6becd61c01f43411d4bdfd73ec316a62141a
import LandingPage from "./Pages/PageLanding";
import LoginPage from "./Pages/PageLogin";
import HomeUser from "./Pages/PageUser";
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
