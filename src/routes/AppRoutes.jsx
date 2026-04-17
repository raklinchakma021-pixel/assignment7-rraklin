// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";
import FriendDetails from "../pages/FriendDetails";

const  AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/friend/:id" element={<FriendDetails />} />
        <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default AppRoutes;