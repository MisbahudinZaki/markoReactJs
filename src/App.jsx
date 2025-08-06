import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import AppRouter from "./Routers";
import Navbar from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import '../public/assets/js/script.js';

function App(){
  useEffect(() => {
    const checkScriptsReady = setInterval(() => {
      if (typeof initThemeSwitch === "function") {
        clearInterval(checkScriptsReady);
  
        initBannerVideo?.();
        initThemeSwitch?.();
        initNavLink?.();
        initSidebar?.();
        initEditSidebar?.();
        initSidebarDropdown?.();
        initCounter?.();
        initSubmitContact?.();
        initSubmitNewsletter?.();
        initAnimateData?.();
      }
    }, 100);
    setTimeout(() => clearInterval(checkScriptsReady), 5000);
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