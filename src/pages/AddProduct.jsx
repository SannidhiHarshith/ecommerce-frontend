import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AddProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
  name: "",
  price: "",
  quantity: "",
  imageUrl: ""
});

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const saveProduct = (e) => {
    e.preventDefault();

    API.post("/products", product)
      .then(() => {
        alert("Product Added Successfully");
        navigate("/admin-dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert("Error adding product");
      });
  };

  return (
    <div className="container mt-4">
      <h2>Add Product</h2>

      <form onSubmit={saveProduct}>
        <div className="mb-3">
          <label>Product Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Quantity</label>
          <input
            type="number"
            className="form-control"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Image URL</label>
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            className="form-control mb-2"
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-success">Save Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
