import { Link } from "react-router-dom";
import { FaTasks } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "#0F172A", marginLeft: "calc(-50vw + 50%)", width: "100vw", padding: "0" }}>
            <div className="container-fluid ps-4 pe-4">
                <Link
                    className="navbar-brand fw-bold d-flex align-items-center"
                    to="/"
                >
                    <FaTasks style={{ color: "#38BDF8", marginRight: "0.5rem", fontSize: "1.5rem" }} />
                    <span style={{ color: "#F8FAFC", fontSize: "1.5rem" }}>
                        TaskFlow
                    </span>
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul className="navbar-nav me-4">

                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/" style={{ color: "#E2E8F0" }}>
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link px-3" href="#features" style={{ color: "#E2E8F0" }}>
                                Features
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link px-3" href="#about" style={{ color: "#E2E8F0" }}>
                                About
                            </a>
                        </li>

                    </ul>

                    {/* Buttons */}
                    <div className="d-flex gap-2">
                        <Link
                            to="/login"
                            className="btn btn-outline-light"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="btn"
                            style={{ background: "#38BDF8", color: "#0F172A", fontWeight: "600" }}
                        >
                            Register
                        </Link>
                    </div>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;