import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosConfig";

function RecruiterDashboard() {

    const [analytics, setAnalytics] = useState({
        totalJobs: 0,
        totalApplications: 0,
        pending: 0,
        shortlisted: 0,
        rejected: 0
    });

    useEffect(() => {

        const fetchAnalytics = async () => {

            try {

                const token = localStorage.getItem("token");

                const response = await axiosInstance.get(
                    "/applications/recruiter/analytics",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                setAnalytics(response.data);

            } catch (error) {

                console.log(error);

            }
        };

        fetchAnalytics();

    }, []);

    return (

        <div className="container mt-4">

            <h2 className="fw-bold mb-4">
                Recruiter Dashboard
            </h2>

            <div className="row g-4">

                <div className="col-md-4">
                    <div className="card shadow border-0">
                        <div className="card-body text-center">
                            <h5>Total Jobs</h5>
                            <h2>{analytics.totalJobs}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow border-0">
                        <div className="card-body text-center">
                            <h5>Total Applications</h5>
                            <h2>{analytics.totalApplications}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow border-0">
                        <div className="card-body text-center">
                            <h5>Pending</h5>
                            <h2>{analytics.pending}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow border-0">
                        <div className="card-body text-center">
                            <h5>Shortlisted</h5>
                            <h2>{analytics.shortlisted}</h2>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow border-0">
                        <div className="card-body text-center">
                            <h5>Rejected</h5>
                            <h2>{analytics.rejected}</h2>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );

}

export default RecruiterDashboard;