import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../AuthForm.css";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setUsername("");
    setPassword("");
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Please fill in both fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (isLogin) {
      if (users[username] && users[username] === password) {
        alert("Login successful!");
        navigate("/dashboard"); 
      } else {
        setError("Invalid username or password.");
      }
    } else {
      if (users[username]) {
        setError("Username already exists.");
      } else {
        users[username] = password;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful!");
        setIsLogin(true);
        setUsername("");
        setPassword("");
      }
    }
  };

  return (
    <div className="container">
      <div className="heading-container">
        <img src="src/images/logo.png" alt="logo" />
        <p>
          Welcome to <span>TechLambdas <br /> PVT Ltd</span>
        </p>
      </div>
      <div className="form-container">
        <form className="box" onSubmit={handleSubmit}>
          <p style={{marginBottom:"20px", fontSize:"22px",}}>Welcome Back !</p>
          <h2 >{isLogin ? "Sign in to" : "Sign up to"}</h2>
          <p>TechLambdas PVT Ltd</p>

          <div className="form-group form-group1">
            <label>Username</label>
            <input
              type="text"
              value={username}
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="authform-button">{isLogin ? "Login" : "Register"}</button>

          <p className="switch-text">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span className="switch-link" onClick={toggleForm}>
              {isLogin ? "Register here" : "Login here"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
