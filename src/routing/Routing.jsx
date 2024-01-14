import { Routes, BrowserRouter, Route, useNavigate } from "react-router-dom";
import Home from '../pages/home/Home.jsx'
import Login from '../pages/Login/Login.jsx'
import Header from '../components/Header.jsx'
import Layout from "../components/layout/Layout.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import { getLocalStorage } from "../utils/LocalstorageUtils.js";
import { useEffect } from "react";
import AuthProtection from "./AuthProtection.jsx";
import DashboardProtection from "./DashboardProtection.jsx";

const Root = () => {
    const navigate = useNavigate();
    const isAuthenticated = getLocalStorage('accessToken');
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/admin/dashboard');
        } else {
            navigate('/auth/home');
        }
    }, [navigate, isAuthenticated]);
    return null;
};

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Root />} />
                <Route path="/auth" element={<AuthProtection />}>
                    <Route path="home" element={<Layout><Home /></Layout>} />
                    <Route path="login" element={<Layout><Login /></Layout>} />
                </Route>
                <Route path="/admin" element={<DashboardProtection />}>
                    <Route path="dashboard" element={<Layout> <Dashboard /></Layout>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing