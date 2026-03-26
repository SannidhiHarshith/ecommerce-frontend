import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Signup() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "CUSTOMER"
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const signup = () => {
    API.post("/auth/signup", user)
      .then((res) => {
        alert("Signup Successful");

        localStorage.setItem("user", JSON.stringify(res.data));

        navigate("/customer-dashboard");
      });
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>

      <input className="form-control mb-2" name="name" placeholder="Name" onChange={handleChange}/>
      <input className="form-control mb-2" name="email" placeholder="Email" onChange={handleChange}/>
      <input className="form-control mb-2" type="password" name="password" placeholder="Password" onChange={handleChange}/>

      <button className="btn btn-primary" onClick={signup}>
        Signup
      </button>
    </div>
  );
}

export default Signup;
