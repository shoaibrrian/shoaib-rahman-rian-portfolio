// Mock data for Shoaib Rahman Rian's portfolio

export const mockData = {
  personal: {
    name: "Shoaib Rahman Rian",
    title: "Web Developer",
    bio: "Passionate web developer with strong front-end and back-end development skills. Proficient in HTML, CSS, JavaScript and modern frameworks like React and Node.js. Eager to contribute to real-world projects and grow as a full-stack developer.",
    email: "shoaibrian@gmail.com",
    phone: "+880 1931117198",
    location: "Dhaka, Bangladesh",
    linkedin: "https://www.linkedin.com/in/shoaibrahmanrian",
    github: "https://github.com/shoaibrrian",
    resumeUrl: "https://customer-assets.emergentagent.com/job_minimal-portfolio-13/artifacts/ubippuik_Resume_Shoaib%20Rahman%20Rian.pdf",
    profileImage: "https://customer-assets.emergentagent.com/job_minimal-portfolio-13/artifacts/qobqmsw7_IMG_3542.png"
  },

  skills: {
    frontend: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Tailwind CSS", level: 85 }
    ],
    backend: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 70 }
    ],
    tools: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 80 },
      { name: "RESTful APIs", level: 75 },
      { name: "Responsive Design", level: 90 }
    ]
  },

  education: [
    {
      degree: "BSc in Computer Science & Engineering",
      institution: "United International University",
      duration: "Present",
      cgpa: "2.37",
      status: "Ongoing"
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Dhaka Imperial College",
      duration: "2019",
      gpa: "4.67"
    },
    {
      degree: "Secondary School Certificate",
      institution: "Faizur Rahman Ideal School",
      duration: "2017",
      gpa: "5.00"
    }
  ],

  experience: [
    {
      title: "Senior Scout",
      organization: "Bangladesh Scouts",
      duration: "2011 - 2017",
      description: "Joined national and regional scout camps, building teamwork and leadership skills. Led group tasks and activities while being trained in discipline and first aid.",
      achievements: [
        "Led group tasks and activities",
        "Trained in discipline and first aid",
        "Built strong teamwork and leadership skills"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Fitness Website",
      description: "Built a comprehensive fitness website with HTML and CSS featuring a BMI calculator and workout guide. Clean, responsive design focused on user experience.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://shoaibrrian.github.io/fitness/",
      githubUrl: "https://github.com/shoaibrrian/fitness",
      image: "/api/placeholder/400/300",
      featured: true,
      category: "Frontend"
    },
    {
      id: 2,
      title: "Tea House Website",
      description: "Created an elegant tea shop website using HTML and Tailwind CSS with a clean, responsive design. Focused on modern UI/UX principles.",
      technologies: ["HTML5", "Tailwind CSS"],
      liveUrl: "https://shoaibrrian.github.io/tea-house/",
      githubUrl: "https://github.com/shoaibrrian/tea-house",
      image: "/api/placeholder/400/300",
      featured: true,
      category: "Frontend"
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with React.js and Node.js. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/shoaibrrian/ecommerce",
      image: "/api/placeholder/400/300",
      featured: false,
      category: "Full Stack"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Ahmed Hassan",
      role: "Senior Developer",
      company: "Tech Solutions BD",
      message: "Shoaib is a dedicated developer with strong problem-solving skills. His attention to detail and eagerness to learn make him a valuable team member.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Sarah Khan",
      role: "Project Manager",
      company: "Digital Innovations",
      message: "Working with Shoaib was a great experience. He delivered clean, responsive code on time and was always open to feedback and improvements.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    }
  ],

  languages: [
    { name: "English", level: "Fluent" },
    { name: "Bangla", level: "Native" }
  ]
};

export default mockData;