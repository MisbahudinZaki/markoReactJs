import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import AppRouter from "./Routers";
import Navbar from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Sidebar from "./Components/Sidebar/Sidebar";

function App(){
  useEffect(() => {
    const checkReady = setInterval(() => {
      if (typeof window.initThemeSwitch === "function") {
        clearInterval(checkReady);
        window.initThemeSwitch(); // Panggil themeswitch dari global
      }
    }, 100);
    setTimeout(() => clearInterval(checkReady), 5000); // timeout
  }, []);
  
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