import Image from "next/image";

const projects = [
  {
    image: "/images/project1.jpg",
    title: "LT Panel Manufacturing",
  },
  {
    image: "/images/project2.jpg",
    title: "Electrical Control Panel",
  },
  {
    image: "/images/project3.jpg",
    title: "Industrial Panel Assembly",
  },
  {
    image: "/images/project4.jpg",
    title: "Copper Busbar System",
  },
  {
    image: "/images/project5.jpg",
    title: "Capacitor Bank Panel",
  },
  {
    image: "/images/project6.jpg",
    title: "Internal Panel Wiring",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={350}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}