import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = ({ data }) => {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', 'Frontend', 'Full Stack', 'Backend'];
  
  const filteredProjects = filter === 'all' 
    ? data 
    : data.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-gray-50 font-inter">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A collection of projects that showcase my development skills and creative problem-solving
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category)}
                className={`transition-all duration-300 ${
                  filter === category 
                    ? 'bg-gray-900 text-white' 
                    : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              <div className="aspect-video bg-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <Eye className="text-gray-400" size={32} />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gray-900 text-white">Featured</Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition-all duration-300"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found for this category.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition-all duration-300"
            onClick={() => window.open('https://github.com/shoaibrrian', '_blank')}
          >
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;