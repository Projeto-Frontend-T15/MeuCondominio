import { Outlet, Navigate } from "react-router-dom";
import { UserProvider } from "../../Contexts/userContext";

export function ProtectedRoutes() {
  const token = localStorage.getItem("@Token");

  return (
    <UserProvider>
        {token ? <Outlet /> : <Navigate to="/" />}
    </UserProvider>
  );
}