function About() {
    return (
        <section
            id="about"
            className="text-white py-5"
            style={{
                width: "100vw",
                marginLeft: "calc(-50vw + 50%)",
                background: "#0F172A",
            }}
        >
            <div className="container">

                <div className="text-center mb-5">
                    <h2 className="fw-bold display-5">
                        About TaskFlow
                    </h2>

                    <p
                        className="mx-auto"
                        style={{
                            maxWidth: "800px",
                            color: "#CBD5E1",
                            fontSize: "1.1rem",
                            lineHeight: "1.8",
                        }}
                    >
                        TaskFlow is a modern task management platform designed
                        to help individuals and teams stay organized, improve
                        productivity, and achieve goals efficiently. From
                        creating tasks and assigning responsibilities to
                        tracking progress and managing deadlines, TaskFlow
                        provides everything needed to streamline daily work.
                    </p>
                </div>

                <div className="row text-center">

                    <div className="col-md-4 mb-4">
                        <div
                            className="p-4 h-100"
                            style={{
                                background: "#1E293B",
                                borderRadius: "20px",
                            }}
                        >
                            <h4 className="fw-bold mb-3">
                                🚀 Increase Productivity
                            </h4>

                            <p className="text-light">
                                Stay focused and manage tasks efficiently
                                with an easy-to-use interface.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div
                            className="p-4 h-100"
                            style={{
                                background: "#1E293B",
                                borderRadius: "20px",
                            }}
                        >
                            <h4 className="fw-bold mb-3">
                                👥 Team Collaboration
                            </h4>

                            <p className="text-light">
                                Assign tasks, monitor progress, and work
                                together seamlessly with your team members.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div
                            className="p-4 h-100"
                            style={{
                                background: "#1E293B",
                                borderRadius: "20px",
                            }}
                        >
                            <h4 className="fw-bold mb-3">
                                📈 Track Progress
                            </h4>

                            <p className="text-light">
                                Keep track of pending, ongoing, and completed
                                tasks to ensure projects are delivered on time.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;