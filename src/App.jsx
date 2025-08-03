import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import AppRouter from "./Routers";
import Navbar from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import "../public/assets/js/script.js";

function App(){
  useEffect(() => {
    initBannerVideo?.();
    initNavLink?.();
    initSidebar?.();
    initEditSidebar?.();
    initSidebarDropdown?.();
    initCounter?.();
    initThemeSwitch?.();
    initSubmitContact?.();
    initSubmitNewsletter?.();
    initAnimateData?.();
  }, []);

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;