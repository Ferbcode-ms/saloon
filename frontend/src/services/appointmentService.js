import axios from "axios";

// const API_URL = "http://localhost:5000/appointments"; // Update with your backend URL if needed

export const fetchAppointments = async (date) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_API_URL}/appointments?date=${date}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return [];
  }
};

export const bookAppointment = async (appointmentData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_API_URL}/appointments`,
      appointmentData
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Error booking appointment.";
  }
};
