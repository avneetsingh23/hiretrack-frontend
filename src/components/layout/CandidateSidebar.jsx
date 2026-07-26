
import { Link, useNavigate } from "react-router-dom";

function CandidateSidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("role");

        navigate("/login");

    };

    return (

        <div className="p-3">

            <h3 className="text-center mb-4">
                HireTrack
            </h3>

            <ul className="nav flex-column">

                <li className="nav-item mb-2">
                    <Link
                        to="/candidate"
                        className="nav-link text-white"
                    >
                        Dashboard
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link
                        to="/candidate/profile"
                        className="nav-link text-white"
                    >
                        My Profile
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link
                        to="/candidate/jobs"
                        className="nav-link text-white"
                    >
                        Browse Jobs
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link
                        to="/candidate/applications"
                        className="nav-link text-white"
                    >
                        Applied Jobs
                    </Link>
                </li>
                <li className="nav-item mt-4">

                    <button
                        className="btn btn-danger w-100"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </li>

            </ul>

        </div>

    );

}

export default CandidateSidebar;