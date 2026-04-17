// src/pages/Timeline.jsx
import { useState } from "react";
import { useApp } from "../context/AppContext";
import { CiAlarmOn } from "react-icons/ci";
import { FaPhoneAlt, FaDotCircle } from "react-icons/fa";
import { RiMessage2Line, RiVideoLine } from "react-icons/ri";

const typeIcon = {
  Call: <FaPhoneAlt />,
  Text: <RiMessage2Line />,
  Video: <RiVideoLine />
};

const Timeline = () => {
  const { timeline } = useApp();
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? timeline
      : timeline.filter(t => t.type === filter);

  return (
    <>
      <div className="w-9/12 mx-auto">
        <h1 className="font-bold text-3xl py-8">Timeline</h1>
      </div>

      <div className="w-9/12 mx-auto">
        <select
          onChange={e => setFilter(e.target.value)}
          className="mb-6 border p-2 rounded"
        >
          <option value="All">All</option>
          <option value="Text">Text</option>
          <option value="Call">Call</option>
          <option value="Video">Video</option>
        </select>

        {filtered.length === 0 && <p>No activity yet</p>}

        {filtered.map((item, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded shadow mb-3 flex justify-between"
          >
            <div className="flex items-center">
              <div className="mx-4 text-lg">
                {typeIcon[item.type] || <FaDotCircle />}
              </div>

              <div className="flex flex-col">
                <span>{item.title}</span>
                <span className="text-sm text-gray-500">
                  {item.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Timeline;