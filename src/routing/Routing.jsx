import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from '../pages/home/Home.jsx'
import Header from '../components/Header.jsx'
import MainLayout from "../hoc/mainLayout.jsx";
import Layout from "../components/layout/Layout.jsx";
import Login from "../pages/Login/Login.jsx";

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Layout><Home/></Layout>   } />
                <Route path="login" element={<Layout><Login/></Layout>   } />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing