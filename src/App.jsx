
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { AppProvider } from "./context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <Toaster />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}