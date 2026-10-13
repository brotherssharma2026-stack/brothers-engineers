export default function Contact() {
  const mapLink = "https://maps.app.goo.gl/pqCFLERsDrCrXBnL7";

  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-400 font-semibold uppercase tracking-wider">
            Contact Us
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Let's Discuss Your Project
          </h2>

          <p className="text-slate-300 mt-5 text-lg max-w-3xl mx-auto">
            Looking for a reliable partner for LT Panels, Electrical Panels,
            PLC Automation or Industrial Electrical Solutions? Contact Brothers
            Engineers today for a free consultation and quotation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">📞 Phone</h3>
              <a
                href="tel:+918924969759"
                className="text-slate-300 hover:text-orange-400"
              >
                +91 8924969759
              </a>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">📧 Email</h3>
              <a
                href="mailto:brothers.sharma2026@gmail.com"
                className="text-slate-300 hover:text-orange-400 break-all"
              >
                brothers.sharma2026@gmail.com
              </a>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">📍 Office Address</h3>
              <p className="text-slate-300">
                Gijhore, Sector 53,
                <br />
                Noida,
                <br />
                Uttar Pradesh 201307
              </p>

              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg font-semibold transition"
              >
                📍 Get Directions
              </a>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">🕒 Business Hours</h3>
              <p className="text-slate-300">
                Monday – Saturday: 9:00 AM – 6:00 PM
              </p>
              <p className="text-slate-300 mt-2">
                Sunday: 10:00 AM – 5:00 PM
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">🌍 Service Area</h3>
              <p className="text-slate-300">
                Serving Clients Across India
              </p>
              <p className="text-slate-300 mt-2">
                Available for International Projects
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-slate-800 rounded-2xl p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-5">
              Need a Free Quote?
            </h3>

            <p className="text-slate-300 leading-8 mb-8">
              Share your project requirements with us. Our engineering team
              will get back to you with the best solution and quotation.
            </p>

            <a
              href="https://wa.me/918924969759"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 rounded-lg py-4 text-center font-bold text-lg transition"
            >
              💬 Chat on WhatsApp
            </a>

            <a
              href="tel:+918924969759"
              className="mt-5 bg-blue-600 hover:bg-blue-700 rounded-lg py-4 text-center font-bold text-lg transition"
            >
              📞 Call Now
            </a>

            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 border border-slate-500 hover:border-orange-400 hover:text-orange-400 rounded-lg py-4 text-center font-bold transition"
            >
              🗺️ View Our Location on Google Maps
            </a>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12 bg-slate-800 rounded-2xl p-4 md:p-6">
          <h3 className="text-2xl font-bold mb-2">
            Find Us on Google Maps
          </h3>

          <p className="text-slate-300 mb-5">
            Visit our location in Gijhore, Sector 53, Noida.
          </p>

          <div className="rounded-xl overflow-hidden">
            <iframe
              title="Brothers Engineers Google Maps Location"
              src="https://maps.google.com/maps?q=Gijhore%2C%20Sector%2053%2C%20Noida%2C%20Uttar%20Pradesh%20201307&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Open Exact Location in Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}