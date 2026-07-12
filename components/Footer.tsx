export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Company */}
        <div>
          <h3 className="text-2xl font-bold text-blue-400">
            Brothers Engineers
          </h3>

          <p className="mt-4 text-slate-400 leading-7">
            Complete LT Panel Manufacturing, Electrical Contracting,
            PLC Automation and Industrial Electrical Solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-slate-400">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-slate-400">📞 +91 8924969759</p>
          <p className="text-slate-400 mt-2">
            📧 brothers.sharma2026@gmail.com
          </p>
          <p className="text-slate-400 mt-2">
            📍 Gijhore, Sector 53, Noida
          </p>
        </div>

      </div>

      <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500">
        © 2026 Brothers Engineers. All Rights Reserved.
      </div>
    </footer>
  );
}