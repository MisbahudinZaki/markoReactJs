import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Routers";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import { ModalVideoProvider } from "./Components/Video/ModalVideoContext";

function App(){
    return (
        <Router>
            <HelmetProvider>
                <ModalVideoProvider>
                    <Navbar />
                    <Sidebar />
                    <AppRouter />
                    <Footer />
                </ModalVideoProvider>
            </HelmetProvider>
        </Router>
    );
}

export default App;