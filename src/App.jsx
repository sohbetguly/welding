import "jarallax/dist/jarallax.min.css";
import "./App.css";
import "./buttons.js";
import "swiper/swiper-bundle.css";

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="theme-gold btn-theme-rounded">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
