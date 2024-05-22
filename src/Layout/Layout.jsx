import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Layout = () => {
  const loacation = useLocation();
  console.log(loacation.pathname);
  const isLogin = location.pathname.includes("login") || location.pathname.includes("register");
  return (
    <div>
      {isLogin || <NavBar />}
      <Outlet />
      {isLogin || <Footer />}
    </div>
  );
};

export default Layout;
