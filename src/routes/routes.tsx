import App from "@/App";
import Dashboard from "@/layout/Dashboard";
import ProtectedRoute from "@/layout/ProtectedRoute";
import AdminDashboard from "@/pages/AdminDashboard";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import UserOrders from "@/pages/user/UserOrders";
import UserDashboard from "@/pages/UserDashboard";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  {
    path: "admin/dashboard",
    element: (
      <ProtectedRoute role="admin">
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: "user/dashboard",
    element: (
      <ProtectedRoute role="user">
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <UserDashboard />,
      },
      {
        path: "orders",
        element: <UserOrders />,
      },
    ],
  },
]);

export default router;
