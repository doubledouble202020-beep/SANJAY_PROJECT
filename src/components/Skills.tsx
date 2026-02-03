import { Code2, Database, Layout, Server, Smartphone, Terminal } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
      color: 'blue',
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'GraphQL'],
      color: 'green',
    },
    {
      icon: Database,
      title: 'Database & Tools',
      skills: ['Supabase', 'MongoDB', 'Redis', 'Docker', 'Git'],
      color: 'orange',
    },
    {
      icon: Layout,
      title: 'Design & UX',
      skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'Accessibility'],
      color: 'pink',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'PWA', 'Mobile-First Design'],
      color: 'cyan',
    },
    {
      icon: Terminal,
      title: 'DevOps & Cloud',
      skills: ['AWS', 'Vercel', 'CI/CD', 'Linux', 'Nginx'],
      color: 'slate',
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 hover:border-blue-400 text-blue-600',
    green: 'bg-green-50 border-green-200 hover:border-green-400 text-green-600',
    orange: 'bg-orange-50 border-orange-200 hover:border-orange-400 text-orange-600',
    pink: 'bg-pink-50 border-pink-200 hover:border-pink-400 text-pink-600',
    cyan: 'bg-cyan-50 border-cyan-200 hover:border-cyan-400 text-cyan-600',
    slate: 'bg-slate-50 border-slate-200 hover:border-slate-400 text-slate-600',
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Skills & Expertise</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable applications
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`${
                  colorClasses[category.color as keyof typeof colorClasses]
                } p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <Icon size={32} className="mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
