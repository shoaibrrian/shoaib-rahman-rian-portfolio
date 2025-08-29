import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Award } from 'lucide-react';

const About = ({ data, education }) => {
  return (
    <section id="about" className="py-24 bg-gray-50 font-inter">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {data.bio}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Personal Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={data.profileImage}
                alt={data.name}
                className="w-16 h-16 rounded-full object-cover shadow-md ring-2 ring-gray-100"
              />
              <h3 className="text-2xl font-light text-gray-900">Get to Know Me</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm a passionate web developer currently pursuing my BSc in Computer Science & Engineering. 
                My journey in technology started with a curiosity about how websites work, which has evolved 
                into a deep commitment to creating meaningful digital experiences.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                With experience in both frontend and backend technologies, I enjoy building complete solutions 
                that solve real problems. I'm particularly drawn to clean, minimalist design and efficient, 
                scalable code.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, I enjoy learning about new technologies, contributing to open-source projects, 
                and exploring the intersection of design and development.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              <Badge variant="secondary" className="bg-gray-100 text-gray-700">📍 {data.location}</Badge>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700">💼 Available for Work</Badge>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700">🌱 Always Learning</Badge>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-6 flex items-center">
              <GraduationCap className="mr-3 text-gray-600" size={24} />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-lg">{edu.degree}</h4>
                        <p className="text-gray-600 mt-1">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 font-medium">{edu.duration}</p>
                        {edu.gpa && (
                          <div className="flex items-center mt-1">
                            <Award className="mr-1 text-gray-400" size={14} />
                            <span className="text-sm text-gray-600">GPA: {edu.gpa}</span>
                          </div>
                        )}
                        {edu.cgpa && (
                          <div className="flex items-center mt-1">
                            <Award className="mr-1 text-gray-400" size={14} />
                            <span className="text-sm text-gray-600">CGPA: {edu.cgpa}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {edu.status && (
                      <Badge variant="outline" className="text-xs">
                        {edu.status}
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;