import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaKey } from "react-icons/fa";
import axios from "../../api/axiosConfig";
import { toast } from "react-toastify";

function VerifyOtp() {

    const navigate = useNavigate();
    const location = useLocation();

    const email = location.state?.email || "";

    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            await axios.post("/auth/verify-otp", {
                email,
                otp
            });

            toast.success("OTP Verified Successfully");

            navigate("/reset-password", {
                state: { email, otp }
            });

        } catch (err) {

            toast.error(
                err.response?.data?.message ||
                "Invalid OTP"
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

                        <div className="card shadow-lg border-0 rounded-4 p-5">

                            <h2 className="fw-bold text-center text-dark">
                                Verify OTP
                            </h2>

                            <p className="text-center text-muted mb-4">
                                Enter the OTP sent to
                                <br />
                                <strong>{email}</strong>
                            </p>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-4">

                                    <label className="form-label">
                                        OTP
                                    </label>

                                    <div className="input-group">

                                        <span className="input-group-text">
                                            <FaKey />
                                        </span>

                                        <input
                                            type="text"
                                            maxLength="6"
                                            className="form-control"
                                            placeholder="Enter OTP"
                                            value={otp}
                                            onChange={(e) =>
                                                setOtp(e.target.value)
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
                                            ? "Verifying..."
                                            : "Verify OTP"
                                    }
                                </button>

                            </form>

                            <div className="text-center mt-4">

                                <Link to="/forgot-password">
                                    Back
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default VerifyOtp;