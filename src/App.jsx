import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import AppRouter from "./Routers";
import Navbar from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Sidebar from "./Components/Sidebar/Sidebar";

function App(){
  useEffect(() => {
    initThemeSwitch?.();
    initBannerVideo?.();
    initNavLink?.();
    initSidebar?.();
    initEditSidebar?.();
    initSidebarDropdown?.();
    initCounter?.();
    initSubmitContact?.();
    initSubmitNewsletter?.();
    initAnimateData?.();

    setTimeout(() => clearInterval(checkReady), 5000);
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