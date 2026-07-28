import { useState } from "react";
import axios from "../../api/axiosConfig";
import { toast } from "react-toastify";

function AddJob() {

    const [job, setJob] = useState({
        title: "",
        company: "",
        location: "",
        jobType: "",
        salary: "",
        description: ""
    });

    const handleChange = (e) => {

        setJob({
            ...job,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            const response = await axios.post(

                "/jobs",

                job,

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );

            toast.success(response.data.message);

            setJob({
                title: "",
                company: "",
                location: "",
                jobType: "",
                salary: "",
                description: ""
            });

        } catch (error) {

            toast.error(
                error.response?.data?.message || "Unable to add job"
            );

        }

    };

    return (

        <div className="container">

            <h2 className="mb-4">
                Add Job
            </h2>

            <form
                className="card shadow p-4"
                onSubmit={handleSubmit}
            >

                <input
                    className="form-control mb-3"
                    placeholder="Job Title"
                    name="title"
                    value={job.title}
                    onChange={handleChange}
                    required
                />

                <input
                    className="form-control mb-3"
                    placeholder="Company"
                    name="company"
                    value={job.company}
                    onChange={handleChange}
                    required
                />

                <input
                    className="form-control mb-3"
                    placeholder="Location"
                    name="location"
                    value={job.location}
                    onChange={handleChange}
                    required
                />

                <select
                    className="form-select mb-3"
                    name="jobType"
                    value={job.jobType}
                    onChange={handleChange}
                    required
                >

                    <option value="">
                        Select Job Type
                    </option>

                    <option value="Full Time">
                        Full Time
                    </option>

                    <option value="Part Time">
                        Part Time
                    </option>

                    <option value="Internship">
                        Internship
                    </option>

                    <option value="Remote">
                        Remote
                    </option>

                </select>

                <input
                    className="form-control mb-3"
                    placeholder="Salary"
                    name="salary"
                    value={job.salary}
                    onChange={handleChange}
                    required
                />

                <textarea
                    rows="5"
                    className="form-control mb-3"
                    placeholder="Description"
                    name="description"
                    value={job.description}
                    onChange={handleChange}
                    required
                />

                <button className="btn btn-primary">

                    Add Job

                </button>

            </form>

        </div>

    );

}

export default AddJob;