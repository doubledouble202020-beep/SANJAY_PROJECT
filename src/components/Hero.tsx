import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-5xl font-bold">
              JD
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 animate-slide-up">
            John Doe
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up-delay">
            Full Stack Developer & Designer
          </p>

          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12 animate-slide-up-delay-2">
            Crafting beautiful, user-centric digital experiences with modern technologies.
            Passionate about clean code, elegant design, and solving complex problems.
          </p>

          <div className="flex justify-center space-x-6 mb-12 animate-slide-up-delay-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>

          <a
            href="#about"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-all duration-200 animate-bounce"
          >
            <span>Scroll to explore</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
