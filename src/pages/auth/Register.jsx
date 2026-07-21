import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="row justify-content-center">
            <div className="col-md-6">

                <div className="card shadow-lg mt-5">
                    <div className="card-body p-4">

                        <h2 className="text-center text-success mb-4">
                            Create Account
                        </h2>

                        <form>

                            <div className="row">

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        First Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="First Name"
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        Last Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Last Name"
                                    />
                                </div>

                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Email"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Create Password"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Role
                                </label>

                                <select className="form-select">
                                    <option value="">Select Role</option>
                                    <option value="USER">User</option>
                                    <option value="RECRUITER">Recruiter</option>
                                </select>
                            </div>

                            <button className="btn btn-success w-100">
                                Register
                            </button>

                        </form>

                        <hr />

                        <p className="text-center">

                            Already have an account?

                            <Link
                                to="/login"
                                className="text-decoration-none ms-1"
                            >
                                Login
                            </Link>

                        </p>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Register;