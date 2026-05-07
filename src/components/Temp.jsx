import { useState } from "react";
import { Link } from "react-router-dom";
import {FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash} from "react-icons/fa";

function Signup() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

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

    if (
      formData.confirmPassword !==
      formData.password
    ) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (validate()) {
      alert("Signup Successful");
    }
  };

  return (
    <div className="page">
      <div className="auth-container reverse">

        {/* LEFT */}
        <div className="left-section">

          <div className="logo">
            GuidEx
          </div>

          <div className="left-content">
            <h1 className="signup-h">Hello, Future Creator!</h1>
            <p className="signup-p">
              Join us today and unlock amazing possibilities.
            </p>

            <div className="line"></div>

            <div className="blob"></div>

            <blockquote>
              “Create experiences users remember.”
            </blockquote>
          </div>

        </div>

        {/* RIGHT */}
        <div className="right-section">
          <form
            className="form-box"
            onSubmit={handleSubmit}
          >

            <h2>Create Account</h2>
            <p className="subtext">
              Start your journey with GuidEx today.
            </p>

            {/* NAME */}
            <div className="input-group">
              <label>Full Name</label>
              <div className="input-box">
                <FaUser />
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              {errors.name && (
                <span className="error">
                  {errors.name}
                </span>
              )}
            </div>

            {/* EMAIL */}
            <div className="input-group">
              <label>Email</label>
              <div className="input-box">
                <FaEnvelope />
                <input
                  type="email"
                  placeholder="Enter email"
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
                  placeholder="Create password"
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

            {/* CONFIRM PASSWORD */}
            <div className="input-group">
              <label>Confirm Password</label>
              <div className="input-box">
                <FaLock />
                <input
                  type="password"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword:
                        e.target.value,
                    })
                  }
                />
              </div>

              {errors.confirmPassword && (
                <span className="error">
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            <button className="main-btn">
              Sign Up
            </button>

            <p className="bottom-text">
              Already have an account?
              <Link to="/">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;