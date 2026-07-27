import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import CandidateLayout from "../pages/user/CandidateLayout";
import ProtectedRoute from "../components/ProtectedRoute";
import CandidateDashboard from "../pages/user/CandidateDashboard";

import AppliedJobs from "../pages/user/AppliedJobs";
import Profile from "../pages/user/Profile";

import Home from "../pages/public/Home";
import Jobs from "../pages/public/Jobs";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import VerifyOtp from "../pages/auth/VerifyOtp";
import ResetPassword from "../pages/auth/ResetPassword";
import JobDetails from "../pages/public/JobDetails";


function AppRoutes() {

    return (

        <Routes>

            <Route path="/" element={<Layout />}>

                <Route index element={<Home />} />

                <Route path="jobs" element={<Jobs />} />
                <Route path="jobs/:id" element={<JobDetails />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />

                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />

                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="verify-otp" element={<VerifyOtp />} />
                <Route path="reset-password" element={<ResetPassword />} />
                <Route
                    path="candidate"
                    element={
                        <ProtectedRoute>
                            <CandidateLayout />
                        </ProtectedRoute>
                    }

                >
                    <Route index element={<CandidateDashboard />} />
                    <Route
                        path="profile"
                        element={<Profile />}
                    />
                    <Route
                        path="applications"
                        element={<AppliedJobs />}
                    />
                </Route>



            </Route>

        </Routes>

    );

}

export default AppRoutes;