import { FaTasks } from "react-icons/fa";

function Footer() {
    return (
        <footer
            className="text-white pt-5 pb-3"
            style={{ 
                background: "#0F172A",
                width: "100vw",
                marginLeft: "calc(-50vw + 50%)"
            }}
        >
            <div className="container">

                <div className="text-center mb-4">
                    <h3 className="fw-bold">
                        <FaTasks className="me-2" />
                        TaskFlow
                    </h3>

                    <p
                        className="mx-auto text-light"
                        style={{
                            maxWidth: "700px",
                            lineHeight: "1.8",
                        }}
                    >
                        TaskFlow is a modern task management platform developed
                        by our team as a college project. It helps users create,
                        organize, assign, and track tasks efficiently while
                        improving collaboration and productivity.
                    </p>
                </div>

                <hr className="border-secondary" />

                <div className="text-center">
                    <p className="mb-1">
                        Developed by Team TaskFlow
                    </p>

                    <p className="text-light">
                        © 2026 TaskFlow | College Project
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;