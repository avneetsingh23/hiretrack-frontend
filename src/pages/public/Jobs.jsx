import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axiosConfig";

function Jobs() {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    async function fetchJobs() {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "/jobs",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setJobs(response.data.content);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }


    }
    useEffect(() => {
        fetchJobs();
    }, []);

    const filteredJobs = jobs.filter((job) =>

        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.location.toLowerCase().includes(search.toLowerCase())

    );

    return (

        <div className="container py-5">

            <h2 className="fw-bold mb-4">
                Browse Jobs
            </h2>

            <input
                type="text"
                className="form-control mb-4"
                placeholder="Search Jobs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {loading ? (

                <div className="text-center mt-5">

                    <div
                        className="spinner-border text-primary"
                        role="status"
                    >
                    </div>

                    <p className="mt-3">
                        Loading Jobs...
                    </p>

                </div>

            ) : (

                <div className="row">

                    {filteredJobs.length === 0 ? (

                        <div className="text-center">

                            <h4>No Jobs Found</h4>

                        </div>

                    ) : (

                        filteredJobs.map((job) => (

                            <div
                                className="col-md-6 col-lg-4 mb-4"
                                key={job.id}
                            >

                                <div className="card shadow h-100 border-0">

                                    <div className="card-body">

                                        <h4 className="fw-bold">
                                            {job.title}
                                        </h4>

                                        <h6 className="text-primary">
                                            {job.company}
                                        </h6>

                                        <hr />

                                        <p>
                                            <strong>📍 Location:</strong>
                                            {" "}
                                            {job.location}
                                        </p>

                                        <p>
                                            <strong>💼 Job Type:</strong>
                                            {" "}
                                            {job.jobType}
                                        </p>

                                        <p>
                                            <strong>💰 Salary:</strong>
                                            {" "}
                                            {job.salary}
                                        </p>

                                        <p>

                                            {
                                                job.description.length > 120
                                                    ? job.description.substring(0, 120) + "..."
                                                    : job.description
                                            }

                                        </p>

                                    </div>

                                    <div className="card-footer bg-white border-0">

                                        <Link
                                            to={`/jobs/${job.id}`}
                                            className="btn btn-primary w-100"
                                        >
                                            View Details
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        ))

                    )}

                </div>

            )}

        </div>

    );

}

export default Jobs;