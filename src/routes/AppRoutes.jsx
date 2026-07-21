import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Home from "../pages/public/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="forgot-password" element={<h2>Forgot Password</h2>} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;