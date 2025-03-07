import React, { useState, memo, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { heroData } from "../content/content";
import { useSelector } from "react-redux";

const Navbar = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.adminToken); // Ensure this path matches your Redux state

  useEffect(() => {
    // Disable scrolling when the menu is open
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  console.log("Token from Redux:", token); // Log the token value for debugging

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: href.substring(1) } });
      } else {
        const element = document.getElementById(href.substring(1));
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="flex items-center justify-around py-5  sticky top-0 z-50 bg-white">
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-semibold tracking-tight">
          {heroData.brandName}
        </Link>

        {/* Mobile-responsive Navigation Menu */}
        <div
          className={`${
            isMenuOpen
              ? "right-0 rounded-l-sm "
              : "-right-full  rounded-l-[400px]"
          } 
          fixed top-0 h-screen w-[100%] bg-white md:w-auto md:static md:h-auto md:bg-transparent
          flex flex-col md:flex-row items-center justify-center gap-10 md:gap-10 
          transition-all duration-500 z-50`}
        >
          {/* Navigation Links */}
          <ul className="flex flex-col md:flex-row items-center gap-10 md:gap-10">
            {heroData.navigation.map((item) =>
              item.href.startsWith("#") ? (
                // Hash links for about section
                <li key={item.id}>
                  <a
                    key={item.id}
                    href={item.href}
                    className="hover:opacity-70 transition-opacity text-3xl md:text-sm font-bold md:font-normal"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ) : (
                // Router links for services and appointments
                <li key={item.id}>
                  <Link
                    key={item.id}
                    to={item.href}
                    className={`text-3xl md:text-sm font-bold md:font-normal hover:opacity-70 transition-opacity ${
                      location.pathname === item.href ? "font-bold" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Conditional Login/Logout Button */}
        {token ? (
          <Link
            to="/admin/dashboard"
            className="px-6 py-2 bg-black text-white rounded-full hover:scale-105 group transition-all cursor-pointer flex items-center gap-2"
          >
            Dashboard
          </Link>
        ) : (
          <Link
            to="/admin/login"
            className="px-6 py-2 bg-black text-white rounded-full hover:scale-105 group transition-all cursor-pointer flex items-center gap-2"
          >
            Admin Login
          </Link>
        )}

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2.5 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>
      <hr />
    </>
  );
});

export default Navbar;
