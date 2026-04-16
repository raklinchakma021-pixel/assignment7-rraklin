import { BrowserRouter, Routes, Route, NavLink, useParams } from "react-router-dom";
import { useState, useEffect, createContext, useContext } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import toast, { Toaster } from "react-hot-toast";
import { CiAlarmOn } from "react-icons/ci";
import { RiHome2Line, RiMessage2Line, RiVideoLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { FaArchive, FaDotCircle, FaPhoneAlt, FaPlus } from "react-icons/fa";
import { FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

// ---------------- CONTEXT (GLOBAL STATE) ----------------
const AppContext = createContext();
const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]); // starts EMPTY

  
const addInteraction = (friendName, type) => {
  
  const newItem = {
    title: `${type} with ${friendName}`,
    date: new Date().toLocaleDateString("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric"
}),
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
  {
    "id": 1,
    "name": "Emma Wilson",
    "picture": "https://randomuser.me/api/portraits/women/44.jpg",
    "email": "emma@gmail.com",
    "days_since_contact": 62,
    "status": "overdue",
    "tags": ["family"],
    "bio": "Former colleague and mentor",
    "goal": 30,
    "next_due_date": "2026-05-10"
  },
  {
    "id": 2,
    "name": "James Wright",
    "picture": "https://randomuser.me/api/portraits/men/32.jpg",
    "email": "james@gmail.com",
    "days_since_contact": 6,
    "status": "on-track",
    "tags": ["travel"],
    "bio": "Travel buddy & photographer",
    "goal": 7,
    "next_due_date": "2026-04-18"
  },
  {
    "id": 3,
    "name": "Lisa Nakamura",
    "picture": "https://randomuser.me/api/portraits/women/65.jpg",
    "email": "lisa@gmail.com",
    "days_since_contact": 28,
    "status": "almost due",
    "tags": ["work"],
    "bio": "UX designer friend",
    "goal": 30,
    "next_due_date": "2026-04-25"
  },
  {
    "id": 4,
    "name": "David Kim",
    "picture": "https://randomuser.me/api/portraits/men/76.jpg",
    "email": "david@gmail.com",
    "days_since_contact": 80,
    "status": "overdue",
    "tags": ["college"],
    "bio": "Hiking lover",
    "goal": 60,
    "next_due_date": "2026-04-30"
  },
  {
    "id": 5,
    "name": "Sophia Martinez",
    "picture": "https://randomuser.me/api/portraits/women/12.jpg",
    "email": "sophia@gmail.com",
    "days_since_contact": 3,
    "status": "on-track",
    "tags": ["family"],
    "bio": "Cousin and close friend",
    "goal": 7,
    "next_due_date": "2026-04-17"
  },
  {
    "id": 6,
    "name": "Liam Johnson",
    "picture": "https://randomuser.me/api/portraits/men/45.jpg",
    "email": "liam@gmail.com",
    "days_since_contact": 15,
    "status": "almost due",
    "tags": ["work"],
    "bio": "Office teammate",
    "goal": 14,
    "next_due_date": "2026-04-22"
  },
  {
    "id": 7,
    "name": "Olivia Brown",
    "picture": "https://randomuser.me/api/portraits/women/33.jpg",
    "email": "olivia@gmail.com",
    "days_since_contact": 1,
    "status": "on-track",
    "tags": ["travel"],
    "bio": "Adventure partner",
    "goal": 7,
    "next_due_date": "2026-04-16"
  },
  {
    "id": 8,
    "name": "Noah Davis",
    "picture": "https://randomuser.me/api/portraits/men/28.jpg",
    "email": "noah@gmail.com",
    "days_since_contact": 50,
    "status": "overdue",
    "tags": ["college"],
    "bio": "University friend",
    "goal": 45,
    "next_due_date": "2026-05-05"
  },
  {
    "id": 9,
    "name": "Ava Garcia",
    "picture": "https://randomuser.me/api/portraits/women/21.jpg",
    "email": "ava@gmail.com",
    "days_since_contact": 20,
    "status": "almost due",
    "tags": ["family"],
    "bio": "Childhood friend",
    "goal": 21,
    "next_due_date": "2026-04-24"
  },
  {
    "id": 10,
    "name": "William Lee",
    "picture": "https://randomuser.me/api/portraits/men/11.jpg",
    "email": "william@gmail.com",
    "days_since_contact": 5,
    "status": "on-track",
    "tags": ["work"],
    "bio": "Project collaborator",
    "goal": 7,
    "next_due_date": "2026-04-19"
  }
]

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
// ---- DataShow ----
const onTrackCount = friendsData.filter(
  friend => friend.status === "on-track"
).length;

const DataShow = () => (
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10">
  
    <div
      
      className="bg-white shadow rounded-xl p-6 text-center"
    >
    
      <h2 className="text-3xl font-bold text-green-700">
        {friendsData.length}
      </h2>
      <p className="text-sm text-gray-500 mb-4">Total Friends</p>

  
    </div>
    <div
      
      className="bg-white shadow rounded-xl p-6 text-center"
    >
    
      <h2 className="text-3xl font-bold text-green-700">
        {onTrackCount}
      </h2>
      <p className="text-sm text-gray-500 mb-4">On Track</p>

  
    </div>
    <div
      
      className="bg-white shadow rounded-xl p-6 text-center"
    >
    
      <h2 className="text-3xl font-bold text-green-700">
        3
      </h2>
      <p className="text-sm text-gray-500 mb-4">Need Attention</p>

  
    </div>
    <div
      
      className="bg-white shadow rounded-xl p-6 text-center"
    >
    
      <h2 className="text-3xl font-bold text-green-700">
        12
      </h2>
      <p className="text-sm text-gray-500 mb-4">Interactions This Month</p>

  
    </div>
  
</div>


);

// ---- Footer ----
const Footer = () => (
  <>
    <div className="bg-green-900 text-white text-center p-10 mt-10">
    <h1 className="text-4xl font-bold">KeenKeeper</h1>
    <p className="opacity-70">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
  </div>
<div className="bg-green-900 text-white font-bold text-center">
  <h3 className="">Social Links</h3>
  <div className="flex justify-center gap-4 text-2xl py-5">
    <a href="" className=""><FaSquareInstagram className=""/></a>
    <a href=""><FaSquareFacebook/></a>
    <a href=""><FaSquareXTwitter/></a>
  </div>
</div>

<div className="flex justify-between bg-green-900 text-gray-300 py-10 px-7">
  <div>
     <span>© 2026 KeenKeeper. All rights reserved.</span>
  </div>
  <div className="flex gap-4">
    <a href="">Privacy Policy</a>
    <a href="">Terms Of Service</a>
    <a href="">Cookies</a>
  </div>
</div>
  </>

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

// ---- Home ----
const SmallHeading =() => (
  <div>
    <h1 className="font-bold text-xl py-5">Your Friends</h1>
  </div>
)

const Home = () => (

  <div className="p-10">
       <Banner/>
        <DataShow/>
      <SmallHeading/>
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
    <div className="p-10 grid md:grid-cols-6 gap-6 w-9/12 mx-auto">
     <div className="col-span-2">
       <div className="bg-white p-6 rounded-xl shadow">
        <img src={friend.picture} className="w-20 rounded-full"/>
        <h2 className="text-2xl font-bold">{friend.name}</h2>

         <div className="mt-2">
        <span className={`text-xs px-2 py-1 capitalize rounded ${statusColor[friend.status]}`}>
          {friend.status}
        </span>
      </div>

       <div className="mt-2">
        {(friend.tags || []).map(tag => (
          <span key={tag} className={`text-xs px-2 capitalize py-1 rounded ${tagColor[tag] || "bg-gray-200"}`}>
            {tag}
          </span>
        ))}
      </div>
        <p>{friend.bio}</p>
        <p className="text-sm">{friend.email}</p>
      </div>
      <div className="flex flex-col gap-5 ">
        <button className="flex gap-2 items-center shadow-sm p-4"><CiAlarmOn/>Snooze 2 weeks</button>
        <button className="flex gap-2 items-center  shadow-sm p-4"><FaArchive/>Archive</button>
        <button className="text-red-600 flex gap-2 items-center p-4 shadow-sm"><MdDeleteForever/>Delete</button>
      </div>
     </div>
      
<div className="col-span-4">

  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-4">
        <div
      
      className="bg-white shadow rounded-xl p-6 text-center"
    >
    
      <h2 className="text-3xl font-bold text-gray-700">
        {friend.days_since_contact}
      </h2>
      <p className="text-sm text-gray-500 mb-4">Days Since Contact</p>

  
    </div>
  
   
    <div
      
      className="bg-white shadow rounded-xl p-6 text-center"
    >
    
      <h2 className="text-3xl font-bold text-gray-700">
        {friend.goal}
      </h2>
      <p className="text-sm text-gray-500 mb-4">Goal (Days)</p>

  
    </div>

    
    <div
      
      className="bg-white shadow rounded-xl p-6 text-center"
    >
    
      <h2 className="text-3xl font-bold text-gray-700">
       {new Date(friend.next_due_date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })}
      </h2>
      <p className="text-sm text-gray-500 mb-4">Next Due</p>

  
    </div>
   
  
</div>

<div className="bg-white shadow rounded-xl p-6 mb-5">
  <div className="flex justify-between items-center">
  <div>
    <h1>Relationship Goal</h1>
    <p>Connect Every <strong>{friend.goal} days</strong> </p>
  </div>
  <div>
    <button className="btn bg-gray-200 rounded-sm p-2 ">Edit</button>
  </div>
</div>
</div>

  <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl mb-4">Quick Check-in</h2>
        <div className="flex gap-3 mb-6 text-center text-l">
          <button onClick={()=>addInteraction(friend.name,"Call")} className=" text-black px-10 py-3 rounded bg-gray-100"><FaPhoneAlt/>Call</button>
          <button onClick={()=>addInteraction(friend.name,"Text")} className=" text-black px-10 py-3 rounded bg-gray-100"><RiMessage2Line/>Text</button>
          <button onClick={()=>addInteraction(friend.name,"Video")} className=" text-black px-10 py-3 rounded bg-gray-100"><RiVideoLine/>Video</button>
        </div>
      </div>

      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
<div className="flex justify-between">
        <h2 className="text-2xl mb-4 font-bold">Recent Interaction</h2>
  <p className="flex items-center gap-2"><CiAlarmOn/>Full history</p>
</div>
        {history.length===0 && <p>No interactions yet</p>}
        {history.map((item,i)=> (
         <div key={i} className="bg-white p-4 rounded shadow mb-3 flex justify-between">
    
    <div className="flex items-center">
      
      <div className="mx-4 text-lg">
        {typeIcon[item.type]}
      </div>

      <div className="flex flex-col">
        <span>{item.title}</span>
        <span className="text-sm text-gray-500">{item.date}</span>
      </div>

    </div>

  </div>
        ))}
      </div>
</div>

    </div>
  );
}

// ---- Timeline ----


const typeIcon = {
  Call: <FaPhoneAlt />,
  Text: <RiMessage2Line />,
  Video: <RiVideoLine />
};
const Timeline = ()=>{
  const { timeline } = useApp();
  const [filter,setFilter] = useState("All");
  const filtered = filter === "All" ? timeline : timeline.filter(t=>t.type===filter);

  return (
   <>

   <div className="w-9/12 mx-auto">
    <h1 className="font-bold text-3xl py-8">Timeline</h1>
   </div>

    <div className=" w-9/12 mx-auto">
      <select onChange={e=>setFilter(e.target.value)} className="mb-6 border p-2 rounded">
        <option>All timeline</option>
        <option>Text</option>
        <option>Call</option>
        <option>Video</option>
      </select>

      {filtered.length===0 && <p>No activity yet</p>}
     {filtered.map((item, i) => (
  <div key={i} className="bg-white p-4 rounded shadow mb-3 flex justify-between">
    
    <div className="flex items-center">
      
      <div className="mx-4 text-lg">
        {typeIcon[item.type]}
      </div>

      <div className="flex flex-col">
        <span>{item.title}</span>
        <span className="text-sm text-gray-500">{item.date}</span>
      </div>

    </div>

  </div>
))}
    </div>
   </>
  );
}

// ---- Stats ----

const COLORS = ["#f59e0b",  "#22c55e", "#ef4444"];
const Stats = ()=>{
  const { timeline } = useApp();

  if(timeline.length===0) return <div className="p-10 text-center">No stats yet</div>;

  const data = ["Call","Text","Video"].map(type=>({
    name:type,
    value: timeline.filter(t=>t.type===type).length
  }));

  return (
   <>
   <div className="w-9/12 mx-auto">
    <h1 className="font-bold text-3xl py-8">Friendship Analytics</h1>
   </div>

    <div className=" p-10 shadow-sm w-9/12 mx-auto">
      <p className="text-left p-10">By Interaction Type</p>

     <PieChart width={400} height={400} className="mb-8 mx-auto">
  <Pie data={data} dataKey="value"    innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="5%" >
    {data.map((entry, index) => (
      <Cell key={index} fill={COLORS[index % COLORS.length]} />
    ))}
  </Pie>

  <Tooltip />
</PieChart>
 <div className="flex justify-center gap-4 ">
  <div className="flex place-items-center px-2 gap-2"><FaDotCircle className="text-[#22c55e]"/>Text</div>
  <div className="flex place-items-center px-2 gap-2"><FaDotCircle className="text-[#f59e0b]"/>Call</div>
  <div className="flex place-items-center px-2 gap-2"><FaDotCircle className="text-[#ef4444]"/>Video</div>

</div>
    </div>
   
</>
  );
}

// ---- APP ----
export default function App(){
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
     
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