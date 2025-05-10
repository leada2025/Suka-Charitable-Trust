import { useState } from "react";
import { Menu, X } from "lucide-react";
import React from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Programs", path: "/programs" },
    { name: "Resources", path: "/resources" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Donate", path: "/donate" },
    { name: "News & Media", path: "/news" },
    { name: "Contact Us", path: "/contact" },
  ];

  const handleLinkClick = (link) => {
    setActiveLink(link.name);
    setIsOpen(false);
    navigate(link.path); // ← programmatic navigation
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <img className="w-14 h-14 cursor-pointer" src={logo} alt="Logo" onClick={() => navigate("/")} />

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center space-x-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link)}
              className={`${
                activeLink === link.name
                  ? "text-purple-900 font-semibold"
                  : "text-black"
              } hover:text-purple-900 transition`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-black hover:text-purple-900">Login</button>
          <button className="bg-purple-900 text-white px-4 py-1 rounded hover:bg-blue-700">
            Sign Up
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link)}
              className={`block w-full text-left py-2 ${
                activeLink === link.name
                  ? "text-purpl-600 font-semibold"
                  : "text-black"
              } hover:text-purple-900`}
            >
              {link.name}
            </button>
          ))}
          <hr className="my-2" />
          <button className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">
            Login
          </button>
          <button className="block w-full text-left py-2 bg-purple-900 text-white rounded hover:bg-blue-700 px-3">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
