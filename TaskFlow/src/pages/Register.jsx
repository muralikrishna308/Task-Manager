import { useState } from "react";
import axios from "axios";
import Login from "./Login";
import "./Register.css";

function Register() {
const [login, setLogin] = useState(false);

const [formData, setFormData] = useState({
fullName: "",
email: "",
password: "",
confirmPassword: "",
phone: "",
});

const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
setError("");

};

const handleRegister = async (e) => {
e.preventDefault();
const { fullName, email, password, confirmPassword, phone } = formData;

if (!fullName || !email || !password || !confirmPassword || !phone) {
  return setError("All fields are required");
}

if (password !== confirmPassword) {
  return setError("Passwords do not match");
}

try {
  setLoading(true);

  const response = await axios.post(
    "http://localhost:5000/api/register",
    {
      fullname: fullName,
      email,
      password,
      phone: Number(phone),
    }
  );

  alert(response.data.message);

  setFormData({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
} catch (error) {
  setError(
    error.response?.data?.message || "Registration failed"
  );
} finally {
  setLoading(false);
}
};

if (login) {
return <Login />;
}

return ( <div className="register-container"> <div className="register-card"> <h2>Create Account</h2>
    <form onSubmit={handleRegister}>
      <input 
        type="text" 
        name="fullName" 
        placeholder="Full Name" 
        value={formData.fullName}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />

      {formData.confirmPassword &&
        formData.password !== formData.confirmPassword && (
          <p className="error-text">
            Passwords do not match
          </p>
        )}

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />

      {error && <p className="error-text">{error}</p>}

      <button
        type="submit"
        className="register-btn"
      >Register
      </button>
    </form>

    <p className="login-text">
      Already have an account?
    </p>

    <button
      className="login-btn"
      onClick={() => setLogin(true)}
    >
      Login
    </button>
  </div>
</div>

);
}

export default Register;
