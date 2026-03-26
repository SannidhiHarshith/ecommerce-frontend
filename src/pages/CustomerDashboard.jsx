import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../services/api";

function CustomerDashboard() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
  API.get("/products")
    .then((res) => {
      setProducts(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const buyProduct = (id) => {
    alert("Buy feature will be implemented next");
  };

  return (
    <div className="container mt-4">
      <h2>Customer Dashboard</h2>

      <button className="btn btn-danger mb-3" onClick={logout}>
        Logout
      </button>

      <div className="row">
        {products.map((p) => (
          <div className="col-md-3" key={p.id}>
            <div className="card mb-4 shadow">

              {/* Product Image */}
              <img
                src={p.imageUrl}
                alt={p.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                {/* Product Name */}
                <h5 className="card-title">{p.name}</h5>

                {/* Price */}
                <p className="card-text">
                  Price: ₹{p.price}
                </p>

                {/* Quantity */}
                <p className="card-text">
                  Available: {p.quantity}
                </p>

                {/* Buy Button */}
                <button
                  className="btn btn-success"
                  onClick={() => buyProduct(p.id)}
                  disabled={p.quantity === 0}
                >
                  {p.quantity === 0 ? "Out of Stock" : "Buy"}
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerDashboard;
