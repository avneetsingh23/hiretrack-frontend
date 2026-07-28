import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axiosConfig";
import { toast } from "react-toastify";

function MyJobs() {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMyJobs();
    }, []);

    async function fetchMyJobs() {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "/jobs/my-jobs",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setJobs(response.data);

        } catch (error) {

            toast.error("Unable to load jobs");

        } finally {

            setLoading(false);

        }

    }

    async function deleteJob(id) {

        if (!window.confirm("Delete this job?")) {
            return;
        }

        try {

            const token = localStorage.getItem("token");

            const response = await axios.delete(
                `/jobs/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success(response.data.message);

            fetchMyJobs();

        } catch (error) {

            toast.error(
                error.response?.data?.message || "Delete Failed"
            );

        }

    }

    if (loading) {

        return (

            <div className="text-center mt-5">

                <div className="spinner-border text-primary"></div>

            </div>

        );

    }

    return (

        <div className="container">

            <h2 className="mb-4">
                My Jobs
            </h2>

            <div className="row">

                {jobs.length === 0 ? (

                    <div className="text-center">

                        <h4>No Jobs Found</h4>

                    </div>

                ) : (

                    jobs.map(job => (

                        <div
                            className="col-md-6 mb-4"
                            key={job.id}
                        >

                            <div className="card shadow h-100">

                                <div className="card-body">

                                    <h4>{job.title}</h4>

                                    <h6 className="text-primary">
                                        {job.company}
                                    </h6>

                                    <p>
                                        📍 {job.location}
                                    </p>

                                    <p>
                                        💼 {job.jobType}
                                    </p>

                                    <p>
                                        💰 {job.salary}
                                    </p>

                                </div>

                                <div className="card-footer d-flex gap-2">

                                    <Link
                                        to={`/recruiter/edit-job/${job.id}`}
                                        className="btn btn-warning btn-sm"
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteJob(job.id)}
                                    >
                                        Delete
                                    </button>

                                    <Link
                                        to={`/recruiter/applicants/${job.id}`}
                                        className="btn btn-primary btn-sm"
                                    >
                                        Applicants
                                    </Link>

                                </div>

                            </div>

                        </div>

                    ))

                )}

            </div>

        </div>

    );

}

export default MyJobs;