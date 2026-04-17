// src/pages/FriendDetails.jsx
import { useParams } from "react-router-dom";
import { useApp } from "../context/AppContext";
// import { friendsData } from "../data/friends";
import { CiAlarmOn } from "react-icons/ci";
import { FaArchive, FaPhoneAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { RiMessage2Line, RiVideoLine } from "react-icons/ri";

const typeIcon = {
  Call: <FaPhoneAlt />,
  Text: <RiMessage2Line />,
  Video: <RiVideoLine />
};

const FriendDetails = () => {
  const { id } = useParams();
  const { timeline, addInteraction ,friends} = useApp();

  const friend = friends.find(f => f.id === parseInt(id));
  const history = timeline.filter(t =>
    t.title.includes(friend.name)
  );


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

};

export default FriendDetails;