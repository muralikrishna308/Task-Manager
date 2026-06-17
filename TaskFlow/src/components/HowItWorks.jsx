import {
    FaUserPlus,
    FaSignInAlt,
    FaTasks,
    FaChartLine,
} from "react-icons/fa";

function HowItWorks() {
    const steps = [
        {
            icon: <FaUserPlus size={30} />,
            title: "Register",
            desc: "Create your account to get started.",
        },
        {
            icon: <FaSignInAlt size={30} />,
            title: "Login",
            desc: "Access your personalized dashboard.",
        },
        {
            icon: <FaTasks size={30} />,
            title: "Create Tasks",
            desc: "Add tasks and assign deadlines.",
        },
        {
            icon: <FaChartLine size={30} />,
            title: "Track Progress",
            desc: "Monitor completion and status.",
        },
    ];

    return (
        <section className="py-5 bg-light"
        style={{
            width: "100vw",
            marginLeft: "calc(-50vw + 50%)",
            background: "#F1F5F9",
        }}
        >
            <div className="container">

                <h2 className="text-center fw-bold mb-5">
                    How It Works
                </h2>

                <div className="row g-4">

                    {steps.map((step, index) => (
                        <div className="col-md-3" key={index}>

                            <div
                                className="card h-100 border-0 shadow-sm text-center"
                                style={{
                                    borderRadius: "20px",
                                }}
                            >

                                <div className="card-body">
                                    <div
                                        className="text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                            background: "#1E293B"
                                        }}
                                    >
                                        {step.icon}
                                    </div>

                                    <h5>{step.title}</h5>

                                    <p className="text-muted">
                                        {step.desc}
                                    </p>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section >
    );
}

export default HowItWorks;