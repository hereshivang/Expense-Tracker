import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const Layout = () => {
  return (
    <div className="bg-[#101935] h-[100vh] relative text-white">
      <div className="flex">
        <div className="15%">
          <SideBar />
        </div>
        <div className="w-85%">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
