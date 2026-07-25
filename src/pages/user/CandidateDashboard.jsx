import { useEffect, useState } from "react";
import axios from "../../api/axiosConfig";

function CandidateDashboard() {

    const [dashboard, setDashboard] = useState({
        totalApplications: 0,
        savedJobs: 0,
        profileCompletion: 0
    });

    useEffect(() => {

        const fetchDashboard = async () => {

            try {

                const token = localStorage.getItem("token");

                const response = await axios.get("/users/dashboard", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setDashboard(response.data);

            } catch (error) {

                console.error("Dashboard Error:", error);

            }

        };

        fetchDashboard();

    }, []);

    return (

        <div>

            <h2 className="fw-bold mb-4">
                Candidate Dashboard
            </h2>

            <div className="row">

                <div className="col-md-4 mb-3">

                    <div className="card shadow border-0">

                        <div className="card-body text-center">

                            <h5>Total Applications</h5>

                            <h2 className="text-primary">
                                {dashboard.totalApplications}
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-3">

                    <div className="card shadow border-0">

                        <div className="card-body text-center">

                            <h5>Saved Jobs</h5>

                            <h2 className="text-success">
                                {dashboard.savedJobs}
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-3">

                    <div className="card shadow border-0">

                        <div className="card-body text-center">

                            <h5>Profile Completion</h5>

                            <h2 className="text-warning">
                                {dashboard.profileCompletion}%
                            </h2>

                        </div>

                    </div>

                </div>

            </div>

            <div className="card shadow mt-4">

                <div className="card-body">

                    <h4>
                        Welcome 👋
                    </h4>

                    <p>
                        Welcome to HireTrack. You can browse jobs, apply for jobs,
                        upload your resume and manage your profile from here.
                    </p>

                </div>

            </div>

        </div>

    );

}

export default CandidateDashboard;