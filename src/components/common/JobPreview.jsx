function JobPreview() {

    const jobs = [

        {
            title: "Java Full Stack Developer",
            company: "Infosys",
            location: "Noida",
            type: "Full Time",
        },

        {
            title: "React Developer",
            company: "TCS",
            location: "Bangalore",
            type: "Remote",
        },

        {
            title: "Spring Boot Developer",
            company: "Accenture",
            location: "Hyderabad",
            type: "Full Time",
        },

    ];

    return (

        <section className="py-5 bg-light">

            <div className="container">

                <div className="text-center mb-5">

                    <h2 className="fw-bold">
                        Latest Jobs
                    </h2>

                    <p className="text-muted">
                        Discover opportunities from top companies.
                    </p>

                </div>

                <div className="row">

                    {jobs.map((job, index) => (

                        <div
                            className="col-lg-4 col-md-6 mb-4"
                            key={index}
                        >

                            <div
                                className="card border-0 shadow h-100 p-4"
                                style={{
                                    transition: "0.3s",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(-8px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(0px)";
                                }}
                            >

                                <span className="badge bg-primary mb-3">
                                    {job.type}
                                </span>

                                <h4 className="fw-bold">
                                    {job.title}
                                </h4>

                                <h6 className="text-secondary">
                                    {job.company}
                                </h6>

                                <p className="text-muted">
                                    📍 {job.location}
                                </p>

                                <button className="btn btn-primary mt-3">
                                    Apply Now
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default JobPreview;