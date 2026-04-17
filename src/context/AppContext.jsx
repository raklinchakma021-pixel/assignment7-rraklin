import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { friendsData } from "../data/friends";
const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {

    const [friends, setFriends] = useState(friendsData);
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate API delay
    setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 1500);
  }, []);

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
    <AppContext.Provider value={{ timeline, addInteraction, friends, setFriends, loading  }}>
      {children}
    </AppContext.Provider>
  );
};