import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = () => {
    API.post("/auth/login", login)
      .then((res) => {
        const role = res.data.role;

        localStorage.setItem("role", role);

        if (role === "ADMIN") {
          navigate("/admin-dashboard");
        } else {
          navigate("/customer-dashboard");
        }
      })
      .catch(() => {
        alert("Invalid login credentials");
      });
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">

        {/* LEFT SIDE LOGIN */}
        <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">
          <div style={{ width: "350px" }}>
            <h2 className="mb-4 text-center">Login</h2>

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control mb-3"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control mb-3"
              onChange={handleChange}
            />

            <button
              className="btn btn-primary w-100"
              onClick={handleLogin}
            >
              Login
            </button>

            <p className="mt-3 text-center">
              Don't have an account?{" "}
              <span
                style={{ cursor: "pointer", color: "blue" }}
                onClick={() => navigate("/signup")}
              >
                Signup
              </span>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="col-md-6 p-0">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200"
            alt="Ecommerce"
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover"
            }}
          />
        </div>

      </div>
    </div>
  );
}

export default Login;
