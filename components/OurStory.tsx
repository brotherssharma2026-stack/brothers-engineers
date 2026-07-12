import Image from "next/image";

export default function OurStory() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
          Our Story
        </h2>

        <p className="text-orange-500 font-semibold text-center mb-12">
          Twin Brothers. One Vision.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <Image
              src="/team/twins.png"
              alt="Twin Founders"
              width={700}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
            <p className="text-center mt-4 text-gray-600 font-medium">
  Founders of Brothers Engineers
</p>

<p className="text-center text-blue-900 font-bold">
  Shivanshu Sharma & Paras Sharma
</p>
          </div>

          {/* Right Side */}
          <div>
            <p className="text-gray-700 text-lg leading-8 mb-6">
              Brothers Engineers was founded by twin brothers
              <strong> Shivanshu Sharma</strong> and
              <strong> Paras Sharma</strong> with one dream — to build a company
              known for quality, trust and innovation in industrial electrical
              solutions.
            </p>

            <div className="space-y-4">
              <p>🛡️ <strong>Quality First</strong></p>
              <p>🤝 <strong>Customer Trust</strong></p>
              <p>💡 <strong>Innovation & Reliability</strong></p>
            </div>

            <p className="mt-8 text-xl font-bold text-blue-900 italic">
              "Two Brothers • One Dream • Infinite Commitment."
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}