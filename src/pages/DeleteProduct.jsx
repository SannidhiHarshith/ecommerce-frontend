import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function DeleteProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteProduct = () => {
    API.delete(`/products/${id}`)
      .then(() => {
        alert("Product deleted successfully");
        navigate("/admin-dashboard");
      })
      .catch((err) => {
        console.error("Delete failed:", err);
        alert("Error deleting product");
      });
  };

  const cancelDelete = () => {
    navigate("/admin-dashboard");
  };

  return (
    <div className="container mt-5 text-center">
      
      <h2 className="mb-4">Delete Product</h2>

      {/* Buttons directly under heading */}
      <div className="d-flex flex-column align-items-center mb-4">
        <button
          className="btn btn-danger mb-3"
          style={{ width: "200px" }}
          onClick={deleteProduct}
        >
          Yes, Delete
        </button>

        <button
          className="btn btn-secondary"
          style={{ width: "200px" }}
          onClick={cancelDelete}
        >
          Cancel
        </button>
      </div>

      {/* Confirmation message below buttons */}
      <div className="card p-4 shadow">
        <p className="mb-0">
          Are you sure you want to delete this product?
        </p>
      </div>

    </div>
  );
}

export default DeleteProduct;
