import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "../../api/axiosConfig";

function Login() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const handleChange = (e) => {

        const { name, value, checked, type } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post("/auth/login", {
                email: formData.email,
                password: formData.password
            });

            // Save JWT Token
            localStorage.setItem("token", response.data.data.token);

            // Save User Role
            localStorage.setItem("role", response.data.data.role);

            // Success Message
            toast.success(response.data.message);

            // Redirect Home Page
            setTimeout(() => {
                navigate("/candidate");
            }, 1000)
            setFormData({
                email: "",
                password: "",
                remember: false,
            });

        } catch (error) {

            setFormData((prev) => ({
                ...prev,
                password: "",
            }));

            toast.error(
                error.response?.data?.message || "Invalid Email or Password"
            );
        }

    };

    return (
        <section
            className="d-flex align-items-center"
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg,#2563EB,#1E3A8A)"
            }}
        >
            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-lg-5 col-md-8">

                        <div
                            className="card border-0 shadow-lg p-5 rounded-4"
                        >

                            <div className="text-center mb-4">

                                <h2 className="fw-bold">
                                    Welcome Back
                                </h2>

                                <p className="text-muted">
                                    Login to your HireTrack account
                                </p>

                            </div>

                            <form onSubmit={handleSubmit}>
                                {/* Email */}

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Email
                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text">
                                            <FaEnvelope />
                                        </span>

                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                </div>

                                {/* Password */}

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Password
                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text">
                                            <FaLock />
                                        </span>

                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="form-control"
                                            placeholder="Enter your password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />

                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        >
                                            {showPassword ? (
                                                <FaEyeSlash />
                                            ) : (
                                                <FaEye />
                                            )}
                                        </button>

                                    </div>

                                </div>

                                {/* Remember Me */}

                                <div className="d-flex justify-content-between align-items-center mb-4">

                                    <div className="form-check">

                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="remember"
                                            name="remember"
                                            checked={formData.remember}
                                            onChange={handleChange}
                                        />

                                        <label
                                            htmlFor="remember"
                                            className="form-check-label"
                                        >
                                            Remember Me
                                        </label>

                                    </div>

                                    <Link
                                        to="/forgot-password"
                                        className="text-decoration-none"
                                    >
                                        Forgot Password?
                                    </Link>

                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 py-2 fw-bold"
                                >
                                    Login
                                </button>

                            </form>

                            <hr className="my-4" />

                            <div className="text-center">

                                <span className="text-muted">
                                    Don't have an account?
                                </span>

                                <Link
                                    to="/register"
                                    className="ms-2 text-decoration-none fw-bold"
                                >
                                    Register
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Login;