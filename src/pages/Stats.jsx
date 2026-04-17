// src/pages/Stats.jsx
import { useApp } from "../context/AppContext";
import { ResponsiveContainer,PieChart, Pie, Cell, Tooltip } from "recharts";
import { FaDotCircle } from "react-icons/fa";

const COLORS = ["#f59e0b", "#22c55e", "#ef4444"];

const Stats = () => {
  const { timeline } = useApp();

  if (timeline.length === 0) {
    return <div className="p-10 text-center">No stats yet</div>;
  }

  const data = ["Call", "Text", "Video"].map(type => ({
    name: type,
    value: timeline.filter(t => t.type === type).length
  }));

  return (
    <>
      <div className="w-9/12 mx-auto">
        <h1 className="font-bold text-3xl py-8">
          Friendship Analytics
        </h1>
      </div>

   

      <div className="p-6 shadow-sm w-9/12 mx-auto">

  <p className="text-left mb-6">By Interaction Type</p>

  <div className="w-full h-[400px]">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          innerRadius="60%"
          outerRadius="80%"
          cornerRadius="5%"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>

  <div className="flex justify-center gap-4 mt-4">
    <div className="flex items-center gap-2">
      <FaDotCircle className="text-[#22c55e]" /> Text
    </div>

    <div className="flex items-center gap-2">
      <FaDotCircle className="text-[#f59e0b]" /> Call
    </div>

    <div className="flex items-center gap-2">
      <FaDotCircle className="text-[#ef4444]" /> Video
    </div>
  </div>

</div>
    </>
  );
};

export default Stats;