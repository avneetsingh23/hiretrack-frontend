import { Link } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";

function Navbar() {
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

                    </div>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;