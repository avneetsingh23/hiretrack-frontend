import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="row justify-content-center">
            <div className="col-md-5">

                <div className="card shadow-lg mt-5">

                    <div className="card-body p-4">

                        <h2 className="text-center text-primary mb-4">
                            Login
                        </h2>

                        <form>

                            <div className="mb-3">
                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <div className="d-flex justify-content-between mb-3">

                                <Link
                                    to="/forgot-password"
                                    className="text-decoration-none"
                                >
                                    Forgot Password?
                                </Link>

                            </div>

                            <button
                                className="btn btn-primary w-100"
                            >
                                Login
                            </button>

                        </form>

                        <hr />

                        <p className="text-center">

                            Don't have an account?

                            <Link
                                to="/register"
                                className="text-decoration-none ms-1"
                            >
                                Register
                            </Link>

                        </p>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Login;