export default function Stats() {
  return (
    <section className="bg-blue-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-5xl font-bold">100+</h2>
            <p className="mt-2 text-lg">Projects Completed</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">15+</h2>
            <p className="mt-2 text-lg">Years Experience</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">50+</h2>
            <p className="mt-2 text-lg">Happy Clients</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">24×7</h2>
            <p className="mt-2 text-lg">Technical Support</p>
          </div>

        </div>

      </div>
    </section>
  );
}