import React from 'react';
import { Code, Server, Wrench, Palette, Globe, Database } from 'lucide-react';

const Skills = ({ data }) => {
  // Simplified skill categories without levels
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'text-green-600', 
      bgColor: 'bg-green-50',
      skills: ['Node.js', 'Express.js', 'MongoDB']
    },
    {
      title: 'Tools & Workflow',
      icon: Wrench,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50', 
      skills: ['Git & GitHub', 'VS Code', 'Postman', 'RESTful APIs']
    },
    {
      title: 'Design & UI',
      icon: Palette,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      skills: ['Responsive Design', 'UI/UX Principles', 'Modern Layouts']
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      skills: ['Performance Optimization', 'SEO', 'Web APIs']
    },
    {
      title: 'Soft Skills',
      icon: Database,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      skills: ['Problem Solving', 'Team Collaboration', 'Code Review', 'Testing']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 font-inter">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and methodologies I use to build modern web applications
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl ${category.bgColor} mr-4`}>
                  <category.icon size={24} className={category.color} />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm rounded-lg hover:bg-gray-100 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Showcase */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-2xl font-light text-gray-900 text-center mb-8">
            My Tech Stack
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { name: 'React', logo: '⚛️', color: 'text-blue-500' },
              { name: 'JavaScript', logo: 'JS', color: 'text-yellow-600 bg-yellow-100' },
              { name: 'Node.js', logo: '🟢', color: 'text-green-600' },
              { name: 'MongoDB', logo: '🍃', color: 'text-green-700' },
              { name: 'HTML5', logo: '🔸', color: 'text-orange-600' },
              { name: 'CSS3', logo: '🎨', color: 'text-blue-600' }
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group cursor-default"
              >
                <div className={`text-3xl mb-2 group-hover:scale-110 transition-transform ${tech.logo === 'JS' ? 'px-2 py-1 rounded text-sm font-bold ' + tech.color : ''}`}>
                  {tech.logo}
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow & Methodology */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-light text-gray-900 mb-8">
            Workflow & Methodology
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Agile Development',
              'Version Control (Git)',
              'Responsive First Design',
              'Clean Code Principles',
              'Performance Optimization',
              'Cross-browser Compatibility',
              'API Integration',
              'Continuous Learning'
            ].map((method, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white rounded-full border border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-sm transition-all duration-300 cursor-default"
              >
                {method}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;