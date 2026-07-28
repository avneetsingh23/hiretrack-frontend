import { Link } from "react-router-dom";

function RecruiterSidebar() {

    return (

        <div className="p-4">

            <h2 className="mb-5">
                HireTrack
            </h2>

            <ul className="nav flex-column">

                <li className="nav-item mb-3">

                    <Link
                        to="/recruiter"
                        className="nav-link text-white"
                    >
                        Dashboard
                    </Link>

                </li>

                <li className="nav-item mb-3">

                    <Link
                        to="/recruiter/add-job"
                        className="nav-link text-white"
                    >
                        Add Job
                    </Link>

                </li>

                <li className="nav-item mb-3">

                    <Link
                        to="/recruiter/my-jobs"
                        className="nav-link text-white"
                    >
                        My Jobs
                    </Link>

                </li>

            </ul>

        </div>

    );

}

export default RecruiterSidebar;