// src/components/DataShow.jsx
import { friendsData } from "../data/friends";
// ---- DataShow ----
const onTrackCount = friendsData.filter(
  friend => friend.status === "on-track"
).length;


const DataShow = () => (
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 md:p-10">
  
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

export default DataShow;