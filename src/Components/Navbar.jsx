import { useState,useEffect } from "react";
import { Menu, X } from "lucide-react";
import React from "react";
import logo from "../assets/logo.webp";

import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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


useEffect(() => {
  const current = navLinks.find(link => link.path === location.pathname);
  if (current) {
    setActiveLink(current.name);
  }
}, [location.pathname]);


  return (
    <>
    <nav className="bg-white md:h-22 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-22 flex items-center justify-between">
        {/* Logo */}
      <img className="w-47 h-20 cursor-pointer" src={logo} alt="Logo" onClick={() => navigate("/")} />

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
          <button className="text-black hover:text-purple-900"
          onClick={() => setShowLogin(true)}>Login</button>
          <button className="bg-purple-900 text-white px-4 py-1 rounded hover:bg-blue-700"
           onClick={() => setShowSignup(true)}>
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
                  ? "text-purple-900 font-semibold"
                  : "text-black"
              } hover:text-purple-900 `}
            >
              {link.name}
            </button>
          ))}
          <hr className="my-2" />
          <button className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
           onClick={() => {
    setShowLogin(true);
    setIsOpen(false);
  }}>
            Login
          </button>
          <button className="block w-full text-left py-2 bg-purple-900 text-white rounded hover:bg-blue-700 px-3"
           onClick={() => {
    setShowSignup(true);
    setIsOpen(false);
  }}>
            Sign Up
          </button>
        </div>
      )}
    </nav>

    {showLogin && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl w-96 p-6">
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <input type="email" placeholder="Email" className="w-full p-2 mb-3 border rounded" />
            <input type="password" placeholder="Password" className="w-full p-2 mb-3 border rounded" />
            <div className="flex justify-end space-x-2">
              <button onClick={() => setShowLogin(false)} className="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
              <button className="px-4 py-1 bg-purple-900 text-white rounded hover:bg-blue-700">Login</button>
            </div>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl w-96 p-6">
            <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
            <input type="text" placeholder="Name" className="w-full p-2 mb-3 border rounded" />
            <input type="email" placeholder="Email" className="w-full p-2 mb-3 border rounded" />
            <input type="password" placeholder="Password" className="w-full p-2 mb-3 border rounded" />
            <div className="flex justify-end space-x-2">
              <button onClick={() => setShowSignup(false)} className="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
              <button className="px-4 py-1 bg-purple-900 text-white rounded hover:bg-blue-700">Sign Up</button>
            </div>
          </div>
        </div>
      )}
      </>
  );
};

export default Navbar;
