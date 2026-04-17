import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { friendsData } from "../data/friends";
const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {

    const [friends, setFriends] = useState(friendsData);
  const [timeline, setTimeline] = useState([]);

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
    <AppContext.Provider value={{ timeline, addInteraction, friends, setFriends }}>
      {children}
    </AppContext.Provider>
  );
};