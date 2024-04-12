import { NavLink } from "react-router-dom";
import image from "../../assets/img.png";

const links = [
  { path: "/", name: "DashBoard" },
  { path: "/visualization", name: "Visualization" },
];
const SideBar = () => {
  return (
    <div className="bg-[#03071e] w-full h-[100vh] px-4 py-8">
      <div className="flex gap-4">
        <div className="w-[3rem] h-[3rem] bg-white rounded-full">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          {links.map((item, index) => (
            <NavLink to={item.path}>{item.name}</NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
