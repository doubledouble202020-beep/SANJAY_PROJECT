export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience building
              modern web applications. I specialize in React, TypeScript, and Node.js,
              creating scalable solutions that prioritize user experience and performance.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge through technical writing and
              mentorship.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I believe in writing clean, maintainable code and creating products that
              make a real difference in people's lives.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-700">Projects Completed</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">30+</div>
              <div className="text-gray-700">Happy Clients</div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-lg border border-pink-100">
              <div className="text-3xl font-bold text-pink-600 mb-2">10+</div>
              <div className="text-gray-700">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
