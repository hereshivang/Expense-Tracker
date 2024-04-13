import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
const DashBoard = () => {
  return (
    <div className="px-8 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-[2.5rem]">DashBoard</h1>

        <div className="flex">
          <div className="flex relative">
            <input type="search" />
            <FaSearch className="text-red-500 absolute" />
          </div>

          <IoIosNotifications className="text-green" />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
