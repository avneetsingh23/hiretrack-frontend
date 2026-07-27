import { useEffect, useState } from "react";
import axios from "../../api/axiosConfig";
import { toast } from "react-toastify";

function AppliedJobs() {

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetchApplications();
    }, []);

    async function fetchApplications() {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "/applications/my",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setApplications(response.data);

        } catch (error) {

            toast.error("Unable to load applications");

        }

    }

    async function withdrawApplication(id) {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.delete(

                `/applications/${id}`,

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );

            toast.success(response.data);

            fetchApplications();

        } catch (error) {

            toast.error("Unable to withdraw application");

        }

    }

    return (

        <div className="container">

            <h2 className="mb-4">
                Applied Jobs
            </h2>

            <div className="row">

                {

                    applications.map((application) => (

                        <div
                            className="col-md-6 mb-4"
                            key={application.id}
                        >

                            <div className="card shadow h-100">

                                <div className="card-body">

                                    <h4>
                                        {application.job.title}
                                    </h4>

                                    <h6 className="text-muted">
                                        {application.job.company}
                                    </h6>

                                    <p>
                                        📍 {application.job.location}
                                    </p>

                                    <p>

                                        <strong>Status :</strong>{" "}

                                        <span className="badge bg-primary">

                                            {application.status}

                                        </span>

                                    </p>

                                    <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                            withdrawApplication(application.id)
                                        }
                                    >
                                        Withdraw
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default AppliedJobs;