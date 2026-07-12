"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">

          <div className="flex flex-wrap gap-4">
            <span>📞 +91 8924969759</span>
            <span className="hidden sm:inline">
              📧 brothers.sharma2026@gmail.com
            </span>
          </div>

          <div className="hidden lg:block">
            📍 Gijhore, Sector 53, Noida
          </div>

        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-blue-900">
              Brothers Engineers
            </h1>

            <p className="text-sm text-gray-600">
              Complete LT Panel & Electrical Solutions
            </p>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 font-medium text-gray-700">

            <a href="#" className="hover:text-blue-600">
              Home
            </a>

            <a href="#about" className="hover:text-blue-600">
              About
            </a>

            <a href="#services" className="hover:text-blue-600">
              Services
            </a>

            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>

            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>

          </nav>

          {/* Desktop Button */}
          <a
            href="tel:8924969759"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold"
          >
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-blue-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">

            <nav className="flex flex-col p-5 space-y-4 font-medium">

              <a href="#" onClick={() => setMenuOpen(false)}>
                Home
              </a>

              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>

              <a href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>

              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>

              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>

              <a
                href="tel:8924969759"
                className="bg-orange-500 text-white py-3 rounded-lg text-center font-semibold"
              >
                📞 Call Now
              </a>

            </nav>

          </div>
        )}

      </header>
    </>
  );
}