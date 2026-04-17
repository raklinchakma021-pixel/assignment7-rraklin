// src/components/Banner.jsx
import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="text-center p-10 mt-10">
      <h1 className="text-4xl font-bold">
        Friends to keep close in your life
      </h1>

      <p className="opacity-70 max-w-xl mx-auto mt-3">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.
      </p>

      <button className="flex items-center gap-2 mx-auto mt-6 px-4 py-2 bg-green-700 text-white rounded-lg">
        <FaPlus /> Add Friend
      </button>
    </div>
  );
};

export default Banner;