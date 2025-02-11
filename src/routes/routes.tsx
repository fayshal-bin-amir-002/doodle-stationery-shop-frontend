import App from "@/App";
import Dashboard from "@/layout/Dashboard";
import ProtectedRoute from "@/layout/ProtectedRoute";
import AboutUs from "@/pages/AboutUs";
import ManageUsers from "@/pages/admin/ManageUsers";
import OrderManagement from "@/pages/admin/OrderManagement";
import ProductManagement from "@/pages/admin/ProductManagement";
import AdminDashboard from "@/pages/AdminDashboard";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Product from "@/pages/Product";
import Products from "@/pages/Products";
import Profile from "@/pages/Profile";
import UserOrders from "@/pages/user/UserOrders";
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
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <Product />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
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
      {
        path: "users",
        element: <ManageUsers />,
      },
      {
        path: "products",
        element: <ProductManagement />,
      },
      {
        path: "orders",
        element: <OrderManagement />,
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
        element: <UserOrders />,
      },
    ],
  },
]);

export default router;
