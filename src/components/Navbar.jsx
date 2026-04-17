// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import { RiHome2Line, RiMessage2Line } from "react-icons/ri";
import { CiAlarmOn } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
  return (
    <div className="bg-white shadow px-10 py-4 flex justify-between">
      <h1 className="text-2xl font-bold text-green-700">KeenKeeper</h1>

      <div className="flex gap-4">
        <NavLink to="/" className={({isActive}) =>
          `flex items-center gap-2 px-4 py-2 rounded-lg ${
            isActive ? "bg-green-700 text-white" : "text-gray-600"
          }`
        }>
          <RiHome2Line /> Home
        </NavLink>

        <NavLink to="/timeline" className={({isActive}) =>
          `flex items-center gap-2 px-4 py-2 rounded-lg ${
            isActive ? "bg-green-700 text-white" : "text-gray-600"
          }`
        }>
          <CiAlarmOn /> Timeline
        </NavLink>

        <NavLink to="/stats" className={({isActive}) =>
          `flex items-center gap-2 px-4 py-2 rounded-lg ${
            isActive ? "bg-green-700 text-white" : "text-gray-600"
          }`
        }>
          <ImStatsDots /> Stats
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;