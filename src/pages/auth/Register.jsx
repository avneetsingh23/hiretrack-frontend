import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";

function Register() {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "CANDIDATE",
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(formData);

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

                    <div className="col-lg-6 col-md-8">

                        <div className="card border-0 shadow-lg rounded-4 p-5">

                            <div className="text-center mb-4">

                                <h2 className="fw-bold">
                                    Create Account 🚀
                                </h2>

                                <p className="text-muted">
                                    Join HireTrack today
                                </p>

                            </div>

                            <form onSubmit={handleSubmit}>
                                {/* Full Name */}

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Full Name
                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text">
                                            <FaUser />
                                        </span>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your full name"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                </div>

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
                                            placeholder="Create password"
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
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>

                                    </div>

                                </div>

                                {/* Confirm Password */}

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">
                                        Confirm Password
                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text">
                                            <FaLock />
                                        </span>

                                        <input
                                            type={showConfirm ? "text" : "password"}
                                            className="form-control"
                                            placeholder="Confirm password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                        />

                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() =>
                                                setShowConfirm(!showConfirm)
                                            }
                                        >
                                            {showConfirm ? <FaEyeSlash /> : <FaEye />}
                                        </button>

                                    </div>

                                </div>

                                {/* Role */}

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Register As
                                    </label>

                                    <select
                                        className="form-select"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                    >
                                        <option value="CANDIDATE">Candidate</option>
                                        <option value="RECRUITER">Recruiter</option>
                                    </select>

                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-warning w-100 py-2 fw-bold"
                                >
                                    Create Account
                                </button>

                            </form>

                            <hr className="my-4" />

                            <div className="text-center">

                                <span className="text-muted">
                                    Already have an account?
                                </span>

                                <Link
                                    to="/login"
                                    className="ms-2 fw-bold text-decoration-none"
                                >
                                    Login
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default Register;