import { Outlet, Navigate } from "react-router-dom";
import { userProvider } from "../../Contexts/userContext";

export function ProtectedRoutes() {
  const token = localStorage.getItem("@Token");

  return (
    <userProvider>
        {token ? <Outlet /> : <Navigate to="/" />}
    </userProvider>
  );
}