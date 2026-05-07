import { useState } from "react";
import { Link } from "react-router-dom";
import {FaEnvelope, FaLock, FaEye, FaEyeSlash} from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/\S+@\S+\.\S+/.test(formData.email)
    ) {
      newErrors.email = "Invalid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Login Successful");
    }
  };

  return (
    <div className="page">
      <div className="auth-container">

        {/* LEFT SIDE */}
        <div className="left-section">

          <div className="logo">
            GuidEx
          </div>

          <div className="left-content">
            <h1>Welcome Back!</h1>
            <p>
              Login to continue your journey and
              explore amazing features.
            </p>
            <div className="line"></div>

            <div className="blob"></div>
            <div className="blob-small"></div>

            <blockquote>
              “Design is intelligence made visible.”
            </blockquote>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="right-section">
          <form
            className="form-box"
            onSubmit={handleSubmit}
          >

            <h2>Login</h2>
            <p className="subtext">
              Welcome back, please login to your account.
            </p>

            {/* EMAIL */}
            <div className="input-group">
              <label>Email Address</label>
              <div className="input-box">
                <FaEnvelope />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              {errors.email && (
                <span className="error">
                  {errors.email}
                </span>
              )}
            </div>

            {/* PASSWORD */}
            <div className="input-group">
              <label>Password</label>
              <div className="input-box">
                <FaLock />
                <input
                  type={
                    showPassword ? "text" : "password"
                  }
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                />
                <span
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </span>
              </div>

              {errors.password && (
                <span className="error">
                  {errors.password}
                </span>
              )}
            </div>

            <button className="main-btn">
              Login
            </button>

            <p className="bottom-text">
              Don't have an account?
              <Link to="/signup">
                Sign Up
              </Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;