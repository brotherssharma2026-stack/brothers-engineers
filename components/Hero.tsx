import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <p className="text-blue-400 font-semibold mb-3">
            WELCOME TO BROTHERS ENGINEERS
          </p>
          <p className="text-orange-400 font-semibold mb-6">
  Founded by Twin Brothers – Shivanshu Sharma & Paras Sharma
</p>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Complete Industrial
<br />
Electrical & Automation Solutions
          </h1>

          <p className="text-slate-300 mt-6 text-lg leading-8">
            Brothers Engineers specializes in LT Panel Manufacturing,
            Electrical Contracting, PLC Automation, Industrial Maintenance
            and Complete Electrical Solutions for factories and commercial
            projects.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">

  <span className="bg-slate-800 px-4 py-2 rounded-full text-sm">
    ⚡ LT Panel Manufacturing
  </span>

  <span className="bg-slate-800 px-4 py-2 rounded-full text-sm">
    🤖 PLC Automation
  </span>

  <span className="bg-slate-800 px-4 py-2 rounded-full text-sm">
    🔧 Electrical Contracting
  </span>

</div>

          <div className="flex gap-4 mt-10">
            <div className="flex flex-wrap gap-4 mt-10">

  <a
    href="#contact"
    className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition"
  >
    Get Free Quote
  </a>

  <a
    href="https://wa.me/918924969759"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition"
  >
    WhatsApp Us
  </a>

</div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <Image
            src="/images/project1.jpg"
            alt="LT Panel"
            width={700}
            height={700}
            className="rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}