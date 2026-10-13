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
            <a
              href="tel:+918924969759"
              className="hover:text-orange-300 transition"
            >
              📞 +91 8924969759
            </a>

            <a
              href="mailto:brothers.sharma2026@gmail.com"
              className="hidden sm:inline hover:text-orange-300 transition"
            >
              📧 brothers.sharma2026@gmail.com
            </a>
          </div>

          <div className="hidden lg:block">
            📍 Gijhore, Sector 53, Noida
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">

          {/* Logo */}
          <a
            href="#"
            className="flex items-center shrink-0"
            aria-label="Brothers Engineers Home"
          >
            <img
              src="/images/logo.png"
              alt="Brothers Engineers - Complete LT Panel & Electrical Solutions"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-7 font-medium text-gray-700">
            <a
              href="#"
              className="hover:text-orange-500 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-orange-500 transition"
            >
              About
            </a>

            <a
              href="#services"
              className="hover:text-orange-500 transition"
            >
              Services
            </a>

            <a
              href="#projects"
              className="hover:text-orange-500 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-orange-500 transition"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Call Button */}
          <a
            href="tel:+918924969759"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold transition shadow-sm"
          >
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-3xl text-blue-900 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <nav className="flex flex-col p-5 space-y-4 font-medium text-gray-700">

              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-500 transition"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-500 transition"
              >
                About
              </a>

              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-500 transition"
              >
                Services
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-500 transition"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-500 transition"
              >
                Contact
              </a>

              <a
                href="tel:+918924969759"
                className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-center font-semibold transition"
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