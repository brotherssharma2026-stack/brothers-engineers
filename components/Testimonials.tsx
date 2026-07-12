export default function Testimonials() {
  return (
    <section className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          What Our Clients Say
        </h2>

        <p className="text-center text-slate-400 mb-12">
          Trusted by industries across India for quality electrical solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-800 p-6 rounded-xl">
            <div className="text-yellow-400 text-2xl mb-3">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-slate-300 mb-4">
              Brothers Engineers delivered our LT Panel before schedule with excellent quality.
            </p>

            <h3 className="font-bold">
              ABC Industries
            </h3>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <div className="text-yellow-400 text-2xl mb-3">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-slate-300 mb-4">
              Professional team with outstanding PLC Automation and maintenance support.
            </p>

            <h3 className="font-bold">
              XYZ Pvt. Ltd.
            </h3>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <div className="text-yellow-400 text-2xl mb-3">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-slate-300 mb-4">
              Reliable electrical contracting services with timely project completion.
            </p>

            <h3 className="font-bold">
              Industrial Client
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
}