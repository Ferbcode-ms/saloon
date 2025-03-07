import React, { useState, memo } from "react";
import { useDispatch } from "react-redux";
import { setAdminToken } from "../../redux/slices/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSkeleton from "./LoadingSkeleton";

const AdminLogin = memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const loginUrl = `${process.env.REACT_APP_BACKEND_API_URL}/admin/login`;
      console.log("Login URL:", loginUrl);

      const response = await axios.post(loginUrl, {
        email,
        password,
      });
      dispatch(setAdminToken(response.data.token));
      toast.success("Login successful!");
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      toast.error("Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg py-24 px-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Admin Login
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {loading ? (
          <LoadingSkeleton />
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full hover:bg-black text-white p-3 rounded-lg bg-black/80 transition duration-200"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
});

export default AdminLogin;
