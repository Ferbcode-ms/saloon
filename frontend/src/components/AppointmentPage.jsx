import React, { useState, useEffect, memo } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { bookAppointment } from "../services/appointmentService";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS
import axios from "axios";
import { serviceItems } from "../content/content"; // Import service items

const BookingPage = memo(() => {
  const { register, handleSubmit, reset } = useForm();
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const location = useLocation();
  const selectedServiceFromState = location.state?.selectedService || ""; // Get the selected service from state

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(selectedDate);
    }
  }, [selectedDate]);

  const fetchAvailableSlots = async (date) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_URL}/appointments/available-slots/${date}`
      );
      setAvailableSlots(response.data);
    } catch (error) {
      console.error("Error fetching available slots:", error);
      toast.error("Error fetching available slots."); // Use Toastify for error
    }
  };

  const onSubmit = async (data) => {
    try {
      await bookAppointment({ ...data, service: data.service }); // Include the selected service from the dropdown
      toast.success("Appointment booked successfully!"); // Use Toastify for success
      reset();
      setSelectedDate("");
      setAvailableSlots([]);
    } catch (error) {
      toast.error("Error booking appointment."); // Use Toastify for error
    }
  };

  return (
    <div className="max-w-[700px] mx-auto mt-10 p-6 my-20 rounded-xl">
      <ToastContainer /> {/* Add ToastContainer here */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
        Book an Appointment
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-[85%] md:w-[70%] mt-10 md-mt-20 mx-auto"
      >
        <input
          {...register("name", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Full Name"
        />
        <input
          {...register("email", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Email"
        />
        <input
          {...register("phone", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Phone Number"
        />

        {/* Dropdown for selecting services */}
        <select
          {...register("service", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <option value={selectedServiceFromState}>
            {selectedServiceFromState || "Select a Service"}
          </option>
          {serviceItems.map((service, index) => (
            <option key={index} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>

        <input
          type="date"
          min={new Date().toISOString().split("T")[0]}
          {...register("date", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          onChange={(e) => setSelectedDate(e.target.value)}
        />

        <select
          {...register("timeSlot", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <option value="">Select Time Slot</option>
          {availableSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full hover:bg-black text-white p-4 rounded-lg bg-black/80 transition duration-200"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
});

export default BookingPage;
