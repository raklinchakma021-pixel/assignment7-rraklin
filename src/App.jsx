import { BrowserRouter, Routes, Route, NavLink, useParams } from "react-router-dom";
import { useState, useEffect, createContext, useContext } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import toast, { Toaster } from "react-hot-toast";
import { CiAlarmOn } from "react-icons/ci";
import { RiHome2Line } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { FaPlus } from "react-icons/fa";

// ---------------- CONTEXT (GLOBAL STATE) ----------------
const AppContext = createContext();
const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]); // starts EMPTY

  // const addInteraction = (friendName, type) => {
  //   const newItem = {
  //     title: ${type} with ${friendName},
  //     date: new Date().toLocaleDateString(),
  //     type
  //   };
  //   setTimeline(prev => [newItem, ...prev]);
  //   toast.success(${type} logged!);
  // };
const addInteraction = (friendName, type) => {
  const newItem = {
    title: `${type} with ${friendName}`,
    date: new Date().toLocaleDateString(),
    type
  };

  setTimeline(prev => [newItem, ...prev]);

  toast.success(`${type} logged!`);
};
  return (
    <AppContext.Provider value={{ timeline, addInteraction }}>
      {children}
    </AppContext.Provider>
  );
};

// ---- Mock Friends ----
const friendsData = [
  { id:1, name:"Emma Wilson", picture:"https://randomuser.me/api/portraits/women/44.jpg", days_since_contact:62, status:"overdue", tags:["family"], email:"emma@gmail.com", bio:"Former colleague and mentor"},
  { id:2, name:"James Wright", picture:"https://randomuser.me/api/portraits/men/32.jpg", days_since_contact:6, status:"on-track", tags:["travel"], email:"james@gmail.com", bio:"Travel buddy & photographer"},
  { id:3, name:"Lisa Nakamura", picture:"https://randomuser.me/api/portraits/women/65.jpg", days_since_contact:28, status:"almost due", tags:["work"], email:"lisa@gmail.com", bio:"UX designer friend"},
  { id:4, name:"David Kim", picture:"https://randomuser.me/api/portraits/men/76.jpg", days_since_contact:80, status:"overdue", tags:["college"], email:"david@gmail.com", bio:"Hiking lover"}
];

// ---- Navbar ----
const Navbar = () => (
  <div className="bg-white shadow px-10 py-4 flex justify-between">
    <h1 className="text-2xl font-bold text-green-700">KeenKeeper</h1>
    <div className="flex gap-4">
      <NavLink
  to="/"
  className={({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg ${
      isActive
        ? "bg-green-700 text-white"
        : "text-gray-600"
    }`
  }
>
  <RiHome2Line />
  Home
</NavLink>
    <NavLink
  to="/timeline"
  className={({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg ${
      isActive
        ? "bg-green-700 text-white"
        : "text-gray-600"
    }`
  }
>
<CiAlarmOn/>Timeline
</NavLink><NavLink
  to="/stats"
  className={({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg ${
      isActive
        ? "bg-green-700 text-white"
        : "text-gray-600"
    }`
  }
>
<ImStatsDots/>Stats
</NavLink>
   
    </div>
  </div>
);

// ---- Banner ----
const Banner = () => (

<div className="text-black text-center p-10 mt-10">
  <h1 className="text-4xl font-bold">
    Friends to keep close in your life
  </h1>

  <p className="opacity-70 max-w-xl mx-auto mt-3">
    Your personal shelf of meaningful connections. Browse, tend, and nurture the
    relationships that matter most.
  </p>

  <button
  
    className="inline-flex items-center gap-2 px-4 py-2 mt-6 rounded-lg bg-green-700 text-white"
  >
    <FaPlus/>
    Add Friend
  </button>
</div>
);

// ---- Footer ----
const Footer = () => (
  <div className="bg-green-900 text-white text-center p-10 mt-10">
    <h1 className="text-4xl font-bold">KeenKeeper</h1>
    <p className="opacity-70">Keep your friendships alive</p>
  </div>
);

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
      <p className="text-sm text-gray-500">{f.days_since_contact} days ago</p>

      <div className="flex justify-center gap-2 mt-2 flex-wrap">
        {(f.tags || []).map(tag => (
          <span key={tag} className={`text-xs px-2 py-1 rounded ${tagColor[tag] || "bg-gray-200"}`}>
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-2">
        <span className={`text-xs px-2 py-1 rounded ${statusColor[f.status]}`}>
          {f.status}
        </span>
      </div>
    </NavLink>
  );
};

// ---- Home ----
const Home = () => (
  <div className="p-10">
    <div className="grid md:grid-cols-4 gap-6">
      {friendsData.map(f => <FriendCard key={f.id} f={f} />)}
    </div>
  </div>
);

// ---- Friend Details ----
const FriendDetails = ()=>{
  const { id } = useParams();
  const { timeline, addInteraction } = useApp();
  const friend = friendsData.find(f=>f.id===parseInt(id));

  const history = timeline.filter(t=>t.title.includes(friend.name));

  return (
    <div className="p-10 grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow">
        <img src={friend.picture} className="w-20 rounded-full"/>
        <h2 className="text-2xl font-bold">{friend.name}</h2>
        <p>{friend.bio}</p>
        <p className="text-sm">{friend.email}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl mb-4">Quick Check-in</h2>
        <div className="flex gap-3 mb-6">
          <button onClick={()=>addInteraction(friend.name,"Call")} className="bg-green-700 text-white px-4 py-2 rounded">Call</button>
          <button onClick={()=>addInteraction(friend.name,"Text")} className="bg-green-700 text-white px-4 py-2 rounded">Text</button>
          <button onClick={()=>addInteraction(friend.name,"Video")} className="bg-green-700 text-white px-4 py-2 rounded">Video</button>
        </div>
      </div>

      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl mb-4 font-bold">Interaction History</h2>
        {history.length===0 && <p>No interactions yet</p>}
        {history.map((item,i)=> (
          <div key={i} className="border-b py-2 flex justify-between">
            <span>{item.title}</span>
            <span className="text-sm text-gray-500">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Timeline ----
const Timeline = ()=>{
  const { timeline } = useApp();
  const [filter,setFilter] = useState("All");
  const filtered = filter === "All" ? timeline : timeline.filter(t=>t.type===filter);

  return (
    <div className="p-10">
      <select onChange={e=>setFilter(e.target.value)} className="mb-6 border p-2 rounded">
        <option>All</option>
        <option>Call</option>
        <option>Text</option>
        <option>Video</option>
      </select>

      {filtered.length===0 && <p>No activity yet</p>}
      {filtered.map((item,i)=> (
        <div key={i} className="bg-white p-4 rounded shadow mb-3 flex justify-between">
          <span>{item.title}</span>
          <span>{item.date}</span>
        </div>
      ))}
    </div>
  );
}

// ---- Stats ----
const Stats = ()=>{
  const { timeline } = useApp();

  if(timeline.length===0) return <div className="p-10 text-center">No stats yet</div>;

  const data = ["Call","Text","Video"].map(type=>({
    name:type,
    value: timeline.filter(t=>t.type===type).length
  }));

  return (
    <div className="flex justify-center p-10">
      <PieChart width={400} height={400}>
        <Pie data={data} dataKey="value" outerRadius={150} label>
          {data.map((entry, index) => <Cell key={index} />)}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

// ---- APP ----
export default function App(){
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <Banner/>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/timeline" element={<Timeline/>}/>
          <Route path="/stats" element={<Stats/>}/>
          <Route path="/friend/:id" element={<FriendDetails/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}