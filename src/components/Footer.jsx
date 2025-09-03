import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: data.github, label: 'GitHub' },
    { icon: Linkedin, href: data.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${data.email}`, label: 'Email' }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white font-inter">
      <div className="max-w-6xl mx-auto px-6">
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-light">{data.name}</h3>
            <p className="text-gray-400 leading-relaxed">
              {data.title} passionate about creating meaningful digital experiences 
              through clean code and thoughtful design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Get in Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>{data.location}</p>
              <a
                href={`mailto:${data.email}`}
                className="hover:text-white transition-colors duration-300 block"
              >
                {data.email}
              </a>
              <a
                href={`tel:${data.phone}`}
                className="hover:text-white transition-colors duration-300 block"
              >
                {data.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-center text-gray-400 text-sm">
            <p>
              © {currentYear} {data.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;