// src/components/FriendCard.jsx
import { NavLink } from "react-router-dom";

// ---- Friend Card ----
const FriendCard = ({f})=> {
  const statusColor = {
    overdue: "bg-red-200 text-red-800",
    "on-track": "bg-green-200 text-green-800",
    "almost due": "bg-yellow-200 text-yellow-800"
  };

  const tagColor = {
    family: "bg-pink-200 text-pink-800",
    travel: "bg-blue-200 text-blue-800",
    work: "bg-purple-200 text-purple-800",
    college: "bg-orange-200 text-orange-800"
  };

  return (
    <NavLink to={`/friend/${f.id}`} className="bg-white p-5 rounded-xl shadow block text-center">
      <img src={f.picture} className="w-16 h-16 rounded-full mx-auto"/>
      <h3 className="font-bold mt-2">{f.name}</h3>
      <p className="text-sm text-gray-500 ">{f.days_since_contact}d ago</p>

      <div className="flex justify-center gap-2 mt-2 flex-wrap">
        {(f.tags || []).map(tag => (
          <span key={tag} className={`text-xs px-2 capitalize py-1 rounded ${tagColor[tag] || "bg-gray-200"}`}>
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-2">
        <span className={`text-xs px-2 py-1 capitalize rounded ${statusColor[f.status]}`}>
          {f.status}
        </span>
      </div>
    </NavLink>
  );
};

export default FriendCard;