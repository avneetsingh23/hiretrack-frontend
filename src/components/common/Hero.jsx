import { Link } from "react-router-dom";

function Hero() {
    return (
        <section
            className="text-white py-5"
            style={{
                background: "linear-gradient(135deg, #2563EB, #1E3A8A)",
                minHeight: "85vh",
                display: "flex",
                alignItems: "center",
            }}
        >
            <div className="container">

                <div className="row align-items-center">

                    <div className="col-lg-12 text-center">

                        <span className="badge bg-warning text-dark mb-3 px-3 py-2">
                            🚀 HireTrack Job Portal
                        </span>

                        <h1 className="display-3 fw-bold">
                            Find Your Dream Job Faster
                        </h1>

                        <p className="lead mt-4">
                            HireTrack connects talented candidates with top recruiters.
                            Apply for jobs, manage applications and grow your career.
                        </p>

                        <div className="mt-4">

                            <Link
                                to="/register"
                                className="btn btn-warning btn-lg me-3"
                            >
                                Get Started
                            </Link>

                            <Link
                                to="/login"
                                className="btn btn-outline-light btn-lg"
                            >
                                Login
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;