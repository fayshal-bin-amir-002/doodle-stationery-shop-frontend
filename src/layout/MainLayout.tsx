import Footer from "@/components/Home/Footer";
import NavBar from "@/components/shared/NavBar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
