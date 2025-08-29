import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, CheckCircle } from 'lucide-react';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-24 bg-white font-inter">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey of growth, leadership, and learning experiences
          </p>
        </div>

        <div className="space-y-8">
          {data.map((experience, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <Briefcase className="text-gray-600" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-medium text-gray-900 mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-2">{experience.organization}</p>
                        <Badge variant="outline" className="text-xs">
                          {experience.duration}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {experience.description}
                    </p>
                    
                    {experience.achievements && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="border-gray-200 bg-gray-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Ready for New Opportunities
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                I'm actively seeking new opportunities to contribute to innovative projects 
                and work with passionate teams. Let's discuss how I can add value to your organization.
              </p>
              <Badge className="bg-green-100 text-green-700 border-green-200">
                Available for Work
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;