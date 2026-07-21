import {
    Search,
    Briefcase,
    ShieldCheck
} from "lucide-react";

function Features() {

    const features = [

        {
            icon: <Search size={45} />,
            title: "Easy Job Search",
            description:
                "Search thousands of verified jobs based on your skills and experience.",
            color: "primary",
        },

        {
            icon: <Briefcase size={45} />,
            title: "One Click Apply",
            description:
                "Apply instantly to your dream job with a single click.",
            color: "success",
        },

        {
            icon: <ShieldCheck size={45} />,
            title: "Verified Recruiters",
            description:
                "Connect only with trusted companies and verified recruiters.",
            color: "warning",
        },

    ];

    return (

        <section className="py-5">

            <div className="container">

                <div className="text-center mb-5">

                    <h2 className="fw-bold">
                        Why Choose HireTrack?
                    </h2>

                    <p className="text-muted">
                        Everything you need to find your dream job.
                    </p>

                </div>

                <div className="row">

                    {features.map((item, index) => (

                        <div
                            className="col-lg-4 col-md-6 mb-4"
                            key={index}
                        >

                            <div
                                className="card h-100 border-0 shadow-lg p-4 text-center"

                                style={{
                                    transition: "0.3s",
                                    cursor: "pointer"
                                }}

                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(-10px)";
                                }}

                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(0px)";
                                }}

                            >

                                <div
                                    className={`text-${item.color} mb-3`}
                                >
                                    {item.icon}
                                </div>

                                <h4 className="fw-bold">
                                    {item.title}
                                </h4>

                                <p className="text-muted">
                                    {item.description}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Features;