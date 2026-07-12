import Image from "next/image";

const teamMembers = [
  {
    name: "Dinesh Kumar",
    role: "Head & Technical Guide",
    image: "/team/dinesh.png",
  },
  {
    name: "Brothers",
    role: "Founders - Brothers Engineers",
    image: "/team/brothers.png",
  },
  {
    name: "Shivanshu Sharma",
    role: "Co-Founder & Electrical Engineer",
    image: "/team/shivanshu.png",
  },
  {
    name: "Paras Sharma",
    role: "Co-Founder & Electrical Engineer",
    image: "/team/paras.png",
  },
];

export default function Team() {
  return (
    <section className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Leadership Team
        </h2>

        <p className="text-center text-slate-400 mb-12">
          Experienced professionals dedicated to delivering reliable electrical engineering solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-72 object-cover"
              />

              <div className="p-5 text-center">
                <h3 className="text-xl font-bold">
                  {member.name}
                </h3>

                <p className="text-blue-400 mt-2">
                  {member.role}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}