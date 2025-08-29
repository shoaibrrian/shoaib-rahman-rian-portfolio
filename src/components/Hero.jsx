import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';

const Hero = ({ data }) => {
  const { toast } = useToast();

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // In production, this would download the actual resume
    toast({
      title: "Resume Downloaded",
      description: "Your resume has been downloaded successfully.",
    });
    // Mock download action
    window.open(data.resumeUrl, '_blank');
  };

  const socialLinks = [
    { icon: Github, href: data.github, label: 'GitHub' },
    { icon: Linkedin, href: data.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${data.email}`, label: 'Email' }
  ];

  return (
    <section id="hero" className="min-h-screen bg-white flex items-center justify-center relative font-inter pt-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src={data.profileImage}
              alt={data.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-lg ring-4 ring-gray-100 hover:scale-105 transition-transform duration-300"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            {data.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
            {data.title}
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            {data.bio}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 mb-16">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
      >
        <ChevronDown className="text-gray-400 hover:text-gray-600 transition-colors" size={32} />
      </div>
    </section>
  );
};

export default Hero;