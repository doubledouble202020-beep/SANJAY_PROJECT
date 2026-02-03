import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description:
        'Leading development of cloud-based SaaS platform serving 10k+ users. Architecting scalable microservices and mentoring junior developers.',
      achievements: [
        'Improved application performance by 40%',
        'Led migration to TypeScript',
        'Implemented CI/CD pipeline',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      period: '2020 - 2022',
      description:
        'Developed and maintained multiple client projects using React, Node.js, and PostgreSQL. Collaborated with designers to create intuitive user interfaces.',
      achievements: [
        'Delivered 15+ client projects on time',
        'Reduced bug reports by 60%',
        'Introduced modern testing practices',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'StartUp Ventures',
      period: '2019 - 2020',
      description:
        'Built responsive web applications with React and modern CSS. Worked closely with UX team to implement pixel-perfect designs.',
      achievements: [
        'Implemented design system used across 5 products',
        'Achieved 95+ Lighthouse scores',
        'Reduced load times by 50%',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Work Experience</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          My professional journey and key achievements
        </p>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center gap-3 mb-2 md:justify-end">
                      <Briefcase size={20} className="text-blue-600" />
                      <span className="text-sm font-medium text-blue-600">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                    <p className="text-gray-600 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>

                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
