import "jarallax/dist/jarallax.min.css";
import "./App.css";
import "swiper/swiper-bundle.css";

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

function App() {
  useEffect(() => {
    emailjs.init("gLmeccAUr6rlnu5v2");
  }, []);

  return (
    <div className="theme-gold btn-theme-rounded">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
