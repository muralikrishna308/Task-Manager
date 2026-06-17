import {
    FaTasks,
    FaUsers,
    FaChartLine,
    FaClock,
} from "react-icons/fa";

function Features() {
    return (
        <section 
            id="features"
            style={{
                width: "100vw",
                marginLeft: "calc(-50vw + 50%)",
                background: "#F8FAFC",
                padding: "3rem 0"
            }}
        >
            <div className="container">

                <h2 className="text-center fw-bold mb-5">
                    Why Choose TaskFlow?
                </h2>

                <div className="row g-4">

                    <div className="col-md-3">
                        <div 
                            className="card h-100 border-0 shadow-sm text-center"
                            style={{ borderRadius: "20px" }}
                        >
                            <div className="card-body">
                                <FaTasks style={{ fontSize: "2.5rem", color: "#38BDF8", marginBottom: "1rem" }} />
                                <h4>Create Tasks</h4>
                                <p className="text-muted">
                                    Create and organize tasks easily.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div 
                            className="card h-100 border-0 shadow-sm text-center"
                            style={{ borderRadius: "20px" }}
                        >
                            <div className="card-body">
                                <FaUsers style={{ fontSize: "2.5rem", color: "#38BDF8", marginBottom: "1rem" }} />
                                <h4>Assign Tasks</h4>
                                <p className="text-muted">
                                    Assign work to team members.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div 
                            className="card h-100 border-0 shadow-sm text-center"
                            style={{ borderRadius: "20px" }}
                        >
                            <div className="card-body">
                                <FaChartLine style={{ fontSize: "2.5rem", color: "#38BDF8", marginBottom: "1rem" }} />
                                <h4>Track Progress</h4>
                                <p className="text-muted">
                                    Monitor task completion status.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div 
                            className="card h-100 border-0 shadow-sm text-center"
                            style={{ borderRadius: "20px" }}
                        >
                            <div className="card-body">
                                <FaClock style={{ fontSize: "2.5rem", color: "#38BDF8", marginBottom: "1rem" }} />
                                <h4>Deadlines</h4>
                                <p className="text-muted">
                                    Never miss important due dates.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Features;