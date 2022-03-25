import { AppLayout } from "../layout";
import { useAuth } from "../../context";
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function PrivateRoute() {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.isLogin) return <Navigate to="/login" />;
  if (location.pathname === "/") return <Navigate to="/admin" />;

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
