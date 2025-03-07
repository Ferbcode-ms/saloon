import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAdmin } from "../../redux/slices/authSlice"; // Adjust the import based on your action file structure
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const { adminToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("Admin Token:", adminToken);

  useEffect(() => {
    const checkTokenExpiration = () => {
      if (!adminToken) {
        navigate("/admin/login");
        return false;
      }

      const payload = JSON.parse(atob(adminToken.split(".")[1]));
      const isExpired = Date.now() >= payload.exp * 1000; // Check if token is expired
      if (isExpired) {
        navigate("/admin/login");
        return false;
      }
      return true;
    };

    if (checkTokenExpiration() && selectedDate) {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_API_URL}/appointments?date=${selectedDate}`,
          {
            headers: { Authorization: `Bearer ${adminToken}` },
          }
        )
        .then((res) => setAppointments(res.data))
        .catch(() => {
          toast.error("Failed to fetch appointments."); // Use Toastify for error
          navigate("/admin/login");
        });
    }
  }, [selectedDate, adminToken, navigate]);

  const handleLogout = () => {
    dispatch(logoutAdmin()); // Dispatch the logout action
    navigate("/admin/login"); // Redirect to login page
  };

  const handleDeleteAppointment = async (id) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_API_URL}/appointments/${id}`,
        {
          headers: { Authorization: `Bearer ${adminToken}` },
        }
      );
      setAppointments((prev) => prev.filter((appt) => appt._id !== id)); // Remove the deleted appointment from the state
      toast.success("Appointment deleted successfully."); // Use Toastify for success
    } catch (error) {
      toast.error("Error deleting appointment."); // Use Toastify for error
    }
  };

  return (
    <div className="max-w-[90%] mx-auto mt-10 p-0  md:p-6  rounded-xl min-h-screen">
      <ToastContainer /> {/* Add ToastContainer here */}
      <div className="flex md:justify-between justify-between items-center mb-5">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-5 text-gray-800">
          Admin Dashboard
        </h2>

        <button
          onClick={handleLogout}
          className="mb-4 px-4 py-2 bg-red-500 text-white hover:bg-red-600 transition-all hover:scale-105 duration-200 rounded-lg"
        >
          Logout
        </button>
      </div>
      <input
        type="date"
        className="w-[50%] md:w-[20%] p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <ul className="space-y-3">
        {appointments.length > 0 ? (
          appointments.map((appt) => (
            <li
              key={appt._id}
              className="p-4 border border-gray-200 rounded-lg flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition duration-200 shadow-md "
            >
              <div className="flex justify-between items-start flex-col">
                <span className="text-lg font-semibold text-gray-700">
                  Name: {appt.name}
                </span>
                <span className="text-sm text-gray-600">
                  Email:{" "}
                  <a
                    href={`mailto:${appt.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    {appt.email}
                  </a>
                </span>
                <span className="text-sm text-gray-600">
                  Phone:{" "}
                  <a
                    href={`tel:${appt.phone}`}
                    className="text-blue-500 hover:underline"
                  >
                    {appt.phone}
                  </a>
                </span>
                <span className="text-sm text-gray-600">
                  Service: {appt.service}
                </span>
                <span className="text-sm text-gray-600">
                  Time Slot: {appt.timeSlot}
                </span>
              </div>
              <div className="mt-2">
                <button
                  onClick={() => handleDeleteAppointment(appt._id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-20">
            No appointments found.
          </p>
        )}
      </ul>
    </div>
  );
};

export default AdminDashboard;
