import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { lazy, Suspense, useEffect } from "react";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSkeleton from "./components/LoadingSkeleton";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AppointmentPage from "./components/AppointmentPage";
import { Provider } from "react-redux";
import store from "../redux/store";
import Lenis from "@studio-freight/lenis";

// Lazy load components
const Hero = lazy(() => import("./components/Hero"));
const Aboutus = lazy(() => import("./components/Aboutus"));
const Services = lazy(() => import("./components/Services"));

const App = () => {
  const token = localStorage.getItem("token"); // Retrieve token from localStorage

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Control the smoothness
      easing: (t) => 1 - Math.pow(1 - t, 3), // Custom easing function
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <Provider store={store}>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ErrorBoundary>
          <div className="min-h-screen w-full bg-gray-50">
            <Navbar />
            <Suspense fallback={<LoadingSkeleton />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <div className="w-[90%] mx-auto">
                        <Aboutus />
                        <Services />
                      </div>
                    </>
                  }
                />
                <Route path="/appointments" element={<AppointmentPage />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route
                  path="/admin/dashboard"
                  element={
                    token ? <AdminDashboard /> : <Navigate to="/admin/login" />
                  }
                />
              </Routes>
            </Suspense>
            <Footer />
          </div>
        </ErrorBoundary>
      </Router>
    </Provider>
  );
};

export default App;
