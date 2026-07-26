import { useEffect, useState } from "react";
import axios from "../../api/axiosConfig";
import { toast } from "react-toastify";

function Profile() {

    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        college: "",
        course: "",
        branch: "",
        graduationYear: "",
        bio: "",
        location: "",
        skills: "",
        resumeUrl: ""
    });

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get("/users/profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setProfile(response.data.data);

        } catch (error) {

            toast.error("Unable to load profile");

        }

    };

    const handleChange = (e) => {

        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });

    };

    const handleUpdate = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.put(
                "/users/profile",
                profile,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            console.log(response.data);

            setTimeout(() => {
                toast.success(response.data.message);
            }, 100);

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data?.message || "Profile Update Failed"
            );

        }

    };

    return (

        <div className="container">

            <h2 className="mb-4">My Profile</h2>

            <div className="card shadow p-4">

                <div className="row">

                    <div className="col-md-6 mb-3">
                        <label>First Name</label>
                        <input
                            className="form-control"
                            name="firstName"
                            value={profile.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label>Last Name</label>
                        <input
                            className="form-control"
                            name="lastName"
                            value={profile.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label>Email</label>
                        <input
                            className="form-control"
                            value={profile.email}
                            disabled
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label>Phone</label>
                        <input
                            className="form-control"
                            name="phone"
                            value={profile.phone || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label>College</label>
                        <input
                            className="form-control"
                            name="college"
                            value={profile.college || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label>Course</label>
                        <input
                            className="form-control"
                            name="course"
                            value={profile.course || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label>Branch</label>
                        <input
                            className="form-control"
                            name="branch"
                            value={profile.branch || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label>Graduation Year</label>
                        <input
                            className="form-control"
                            name="graduationYear"
                            value={profile.graduationYear || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label>Location</label>
                        <input
                            className="form-control"
                            name="location"
                            value={profile.location || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label>Skills</label>
                        <input
                            className="form-control"
                            name="skills"
                            value={profile.skills || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-12 mb-3">
                        <label>Bio</label>
                        <textarea
                            className="form-control"
                            rows="4"
                            name="bio"
                            value={profile.bio || ""}
                            onChange={handleChange}
                        />
                    </div>

                </div>

                <button
                    className="btn btn-primary"
                    onClick={handleUpdate}
                >
                    Save Profile
                </button>

            </div>

        </div>

    );

}

export default Profile;