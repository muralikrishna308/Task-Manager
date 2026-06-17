import { FaCheckCircle } from "react-icons/fa";

function Hero() {
    return (
        <section
            className="text-white py-5"
            style={{
                width: "100vw",
                marginLeft: "calc(-50vw + 50%)",
                background: "#0F172A",
                minHeight: "85vh",
                display: "flex",
                alignItems: "center",
            }}
        >
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6">

                        <span
                            className="badge mb-3 p-2"
                            style={{
                                background: "#334155",
                                color: "#F8FAFC"
                            }}
                        >
                            Smart Task Management
                        </span>

                        <h1
                            className="fw-bold mb-4"
                            style={{
                                fontSize: "4rem",
                                lineHeight: "1.2",
                            }}
                        >
                            Manage Tasks
                            <br />
                            With Confidence
                        </h1>

                        <p
                            className="text-light mb-4"
                            style={{
                                fontSize: "1.2rem",
                            }}
                        >
                            Plan, organize and track your work efficiently.
                            Collaborate with team members and meet deadlines
                            using one centralized platform.
                        </p>

                        <div className="mb-4">

                            <button
                                className="btn btn-lg me-3"
                                style={{
                                    background: "#38BDF8",
                                    color: "#0F172A",
                                    borderRadius: "12px",
                                    border: "none"
                                }}
                            >
                                Get Started
                            </button>

                            <button className="btn btn-outline-light btn-lg">
                                Learn More
                            </button>

                        </div>

                        <div>

                            <p>
                                <FaCheckCircle
                                    className="me-2"
                                    style={{
                                        color: "#38BDF8"
                                    }}
                                />
                                Create Tasks
                            </p>

                            <p>
                                <FaCheckCircle
                                    className="me-2"
                                    style={{
                                        color: "#38BDF8"
                                    }}
                                />
                                Assign Team Members
                            </p>

                            <p>
                                <FaCheckCircle
                                    className="me-2"
                                    style={{
                                        color: "#38BDF8"
                                    }}
                                />
                                Track Progress
                            </p>

                            <p>
                                <FaCheckCircle
                                    className="me-2"
                                    style={{
                                        color: "#38BDF8"
                                    }}
                                />
                                Manage Deadlines
                            </p>

                        </div>

                    </div>

                    <div className="col-lg-6">

                        <div
                            className="p-4 shadow-lg"
                            style={{
                                background: "#1E293B",
                                borderRadius: "20px",
                            }}
                        >

                            <h4 className="mb-4">
                                Task Board Preview
                            </h4>

                            <div
                                className="card mb-3 border-0"
                                style={{
                                    background: "#334155",
                                    color: "white",
                                }}
                            >
                                <div className="card-body">
                                    Design Landing Page
                                    <span className="badge bg-warning text-dark float-end">
                                        Pending
                                    </span>
                                </div>
                            </div>

                            <div
                                className="card mb-3 border-0"
                                style={{
                                    background: "#334155",
                                    color: "white",
                                }}
                            >
                                <div className="card-body">
                                    Create Login API
                                    <span className="badge bg-info float-end">
                                        In Progress
                                    </span>
                                </div>
                            </div>

                            <div
                                className="card border-0"
                                style={{
                                    background: "#334155",
                                    color: "white",
                                }}
                            >
                                <div className="card-body">
                                    MongoDB Setup
                                    <span className="badge bg-success float-end">
                                        Completed
                                    </span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;