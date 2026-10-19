export default function Contact() {
  const mapLink = "https://maps.app.goo.gl/pqCFLERsDrCrXBnL7";

  return (
    <section id="contact" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-400 font-semibold uppercase tracking-wider">Contact Us</p>
          <h2 className="text-4xl font-bold mt-2">Let's Discuss Your Project</h2>
          <p className="text-slate-300 mt-5 text-lg max-w-3xl mx-auto">
            Looking for a reliable partner for LT Panels, Electrical Panels,
            PLC Automation or Industrial Electrical Solutions? Contact Brothers
            Engineers today for a free consultation and quotation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">📞 Phone</h3>
              <a href="tel:+918924969759" className="text-slate-300 hover:text-orange-400">+91 8924969759</a>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">📧 Email</h3>
              <a href="mailto:brothers.sharma2026@gmail.com" className="text-slate-300 hover:text-orange-400 break-all">brothers.sharma2026@gmail.com</a>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">📍 Office Address</h3>
              <p className="text-slate-300">Gijhore, Sector 53,<br />Noida,<br />Uttar Pradesh 201307</p>
              <a href={mapLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg font-semibold transition">📍 Get Directions</a>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">🕒 Business Hours</h3>
              <p className="text-slate-300">Monday – Saturday: 9:00 AM – 6:00 PM</p>
              <p className="text-slate-300 mt-2">Sunday: 10:00 AM – 5:00 PM</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">🌍 Service Area</h3>
              <p className="text-slate-300">Serving Clients Across India</p>
              <p className="text-slate-300 mt-2">Available for International Projects</p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-5">Need a Free Quote?</h3>
            <p className="text-slate-300 leading-8 mb-8">
              Share your project requirements with us. Our engineering team will
              get back to you with the best solution and quotation.
            </p>

            <a href="https://wa.me/918924969759" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1DA851] text-white rounded-lg py-4 px-4 flex items-center justify-center gap-3 font-bold text-lg transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 shrink-0" aria-hidden="true">
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.16 1.6 5.98L.08 24l6.28-1.65a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.47-8.43ZM12.08 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.73.98.99-3.64-.24-.37a9.85 9.85 0 0 1-1.52-5.28c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.91a9.85 9.85 0 0 1 2.9 7.02c0 5.47-4.45 9.89-9.92 9.89Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>

            <a href="tel:+918924969759" className="mt-5 bg-blue-600 hover:bg-blue-700 rounded-lg py-4 text-center font-bold text-lg transition">📞 Call Now</a>
            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="mt-5 border border-slate-500 hover:border-orange-400 hover:text-orange-400 rounded-lg py-4 text-center font-bold transition">🗺️ View Our Location on Google Maps</a>
          </div>
        </div>

        <div className="mt-12 bg-slate-800 rounded-2xl p-4 md:p-6">
          <h3 className="text-2xl font-bold mb-2">Find Us on Google Maps</h3>
          <p className="text-slate-300 mb-5">Visit our location in Gijhore, Sector 53, Noida.</p>
          <div className="rounded-xl overflow-hidden">
            <iframe title="Brothers Engineers Google Maps Location" src="https://maps.google.com/maps?q=Gijhore%2C%20Sector%2053%2C%20Noida%2C%20Uttar%20Pradesh%20201307&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="380" style={{ border: 0 }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <a href={mapLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-5 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition">Open Exact Location in Google Maps →</a>
        </div>
      </div>
    </section>
  );
}