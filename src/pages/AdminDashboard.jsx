import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function AdminDashboard() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    API.get("/products")
      .then((res) => {
        console.log("API RESPONSE:", res.data);

        // ✅ Safe handling for all backend formats
        const data = res.data;

        if (Array.isArray(data)) {
          setProducts(data);
        } else if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else if (Array.isArray(data.data)) {
          setProducts(data.data);
        } else {
          setProducts([]); // fallback
        }
      })
      .catch((err) => {
        console.error("Error loading products:", err);
        setProducts([]); // prevent crash
      });
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>

      <button className="btn btn-danger mb-3" onClick={logout}>
        Logout
      </button>

      <button
        className="btn btn-primary mb-3"
        onClick={() => navigate("/add-product")}
      >
        Add Product
      </button>

      {/* ✅ Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Image</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {/* ✅ Safe rendering */}
          {Array.isArray(products) && products.length > 0 ? (
            products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.quantity}</td>

                <td>
                  <img
                    src={p.imageUrl}
                    width="80"
                    alt={p.name}
                    style={{ objectFit: "cover" }}
                  />
                </td>

                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => navigate(`/update-product/${p.id}`)}
                  >
                    Update
                  </button>
                </td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => navigate(`/delete-product/${p.id}`)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No products available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
