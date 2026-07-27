import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import axios from "../../api/axiosConfig";
import { toast } from "react-toastify";

import { useNavigate, useParams } from "react-router-dom";

function JobDetails() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [job, setJob] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchJob();
    }, []);
    const handleApply = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.post(

                `/applications/${id}`,

                {},

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );

            toast.success(response.data);

        } catch (error) {

            toast.error(

                error.response?.data ||

                "Unable to apply"

            );

        }

    };
    async function fetchJob() {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                `/jobs/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setJob(response.data.data);

        } catch (error) {

            toast.error("Unable to load Job");

        } finally {

            setLoading(false);

        }

    }

    if (loading) {

        return (
            <div className="container py-5">
                <h4>Loading...</h4>
            </div>
        );

    }

    if (!job) {

        return (
            <div className="container py-5">
                <h4>Job Not Found</h4>
            </div>
        );

    }

    return (

        <div className="container py-5">

            <div className="card shadow">

                <div className="card-body">

                    <h2>{job.title}</h2>

                    <h5 className="text-primary">
                        {job.company}
                    </h5>

                    <hr />

                    <p>
                        <strong>Location :</strong> {job.location}
                    </p>

                    <p>
                        <strong>Job Type :</strong> {job.jobType}
                    </p>

                    <p>
                        <strong>Salary :</strong> {job.salary}
                    </p>

                    <p>
                        <strong>Description</strong>
                    </p>

                    <p>
                        {job.description}
                    </p>

                    <button
                        className="btn btn-success"
                        onClick={handleApply}
                    >
                        Apply Job
                    </button>

                </div>

            </div>

        </div>

    );

}

export default JobDetails;