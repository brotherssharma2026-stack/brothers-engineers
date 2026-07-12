export default function Services() {
  return (
    <section id="services" className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              ⚡ LT Panels
            </h3>

            <p>
              High quality LT Panel Manufacturing for Industrial and Commercial Projects.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              🔌 Electrical Contracting
            </h3>

            <p>
              Complete Electrical Installation and Maintenance Services.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">
              🤖 PLC Automation
            </h3>

            <p>
              PLC Panels, Automation, Smart Control Systems and Industrial Solutions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}