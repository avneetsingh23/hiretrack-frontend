import { Link, useNavigate } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";
import { toast } from "react-toastify";

function Navbar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("role");

        toast.success("Logout Successful");

        navigate("/login");

    };

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark sticky-top shadow"
            style={{
                background: "linear-gradient(90deg,#2563EB,#1E3A8A)"
            }}
        >
            <div className="container">

                <Link
                    className="navbar-brand fw-bold fs-3 d-flex align-items-center"
                    to="/"
                >
                    <FaBriefcase className="me-2 text-warning" />
                    HireTrack
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbar"
                >

                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/jobs">
                                Jobs
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>

                    </ul>

                    <div>

                        {!token ? (
                            <>
                                <Link
                                    to="/login"
                                    className="btn btn-outline-light me-2"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    className="btn btn-warning"
                                >
                                    Register
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/candidate"
                                    className="btn btn-outline-light me-2"
                                >
                                    Dashboard
                                </Link>

                                <button
                                    className="btn btn-danger"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </>
                        )}

                    </div>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;