import NavBar from "@/components/shared/NavBar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
