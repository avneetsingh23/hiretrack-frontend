import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import axios from "../../api/axiosConfig";
import { toast } from "react-toastify";

function ForgotPassword() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            await axios.post("/auth/forgot-password", {
                email,
            });

            toast.success("OTP sent successfully.");

            navigate("/verify-otp", {
                state: { email },
            });

        } catch (err) {

            toast.error(
                err.response?.data?.message || "Unable to send OTP."
            );

        } finally {

            setLoading(false);

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

                    <div className="col-lg-5">

                        <div className="card border-0 shadow-lg rounded-4 p-5">

                            <h2
                                className="fw-bold text-center mb-3"
                                style={{ color: "#1E3A8A" }}
                            >
                                Forgot Password
                            </h2>

                            <p className="text-center text-muted mb-4">
                                Enter your registered email.
                            </p>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-4">

                                    <label className="form-label">
                                        Email
                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text">
                                            <FaEnvelope />
                                        </span>

                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            required
                                        />

                                    </div>

                                </div>

                                <button
                                    className="btn btn-warning w-100"
                                    disabled={loading}
                                >
                                    {
                                        loading
                                            ? "Sending..."
                                            : "Send OTP"
                                    }
                                </button>

                            </form>

                            <div className="text-center mt-4">

                                <Link to="/login">
                                    Back to Login
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default ForgotPassword;