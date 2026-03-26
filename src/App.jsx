import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import DeleteProduct from "./pages/DeleteProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />

        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/update-product/:id" element={<UpdateProduct />} />
        <Route path="/delete-product/:id" element={<DeleteProduct />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

