import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import MainContent from "./MainContent";
import LimitTaker from "./LimitTaker";
import Drawer from "@mui/material/Drawer";

const DashBoard = () => {
  return (
    <div className="px-8 py-4">
      <Drawer anchor="top" open={true} className="bg-lime-600">
        {" "}
        HHiiiii{" "}
      </Drawer>
      <div className="flex items-center justify-between">
        <h1 className="text-[2.5rem]">DashBoard</h1>

        <LimitTaker />

        <div className="flex gap-8 item-center">
          <div className="flex relative">
            <input
              type="text"
              placeholder="Search"
              className="rounded-md outline-none focus:outline-none active:outline-none px-[1rem] bg-[#19264e] text-gray-300"
              onKeyDown={(event) =>
                event.key === "Enter" && console.log(event.target.value)
              }
            />
            <FaSearch className="text-red-500 absolute right-2 top-2" />
          </div>

          <IoIosNotifications className="text-green text-[2rem]" />

          <IoIosMail className="text-[2rem]" />
        </div>
      </div>

      <MainContent />
    </div>
  );
};

export default DashBoard;
