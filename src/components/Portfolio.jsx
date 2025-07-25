import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Server, Smartphone, ChevronDown } from 'lucide-react';

// Floating particles animation component
const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute bg-blue-400/20 rounded-full animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  );
};

// Animated background gradient
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
    </div>
  </div>
);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [typedText, setTypedText] = useState('');
  const fullText = "John Anderson";
  
  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    "Frontend": [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vue.js", level: 75 }
    ],
    "Backend": [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Django", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 75 }
    ],
    "Database": [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "Redis", level: 70 },
      { name: "Firebase", level: 75 }
    ],
    "Tools & Others": [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Linux", level: 80 },
      { name: "Webpack", level: 75 },
      { name: "Jest", level: 80 }
    ]
  };

  const projects = {
    "React Projects": [
      {
        title: "E-commerce Dashboard",
        description: "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and order tracking.",
        technologies: ["React", "Redux", "Chart.js", "Tailwind CSS"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
      },
      {
        title: "Task Management App",
        description: "A collaborative task management application with drag-and-drop functionality, team collaboration, and progress tracking.",
        technologies: ["React", "Context API", "React Beautiful DnD", "Firebase"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
      },
      {
        title: "Weather Forecast App",
        description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
        technologies: ["React", "OpenWeather API", "Leaflet Maps", "CSS Modules"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop"
      }
    ],
    "Django Projects": [
      {
        title: "Blog Management System",
        description: "A full-featured blogging platform with user authentication, rich text editor, comment system, and SEO optimization.",
        technologies: ["Django", "PostgreSQL", "Bootstrap", "CKEditor"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6d44e?w=400&h=250&fit=crop"
      },
      {
        title: "Online Learning Platform",
        description: "An educational platform with course management, video streaming, progress tracking, and payment integration.",
        technologies: ["Django", "Django REST", "Stripe API", "Celery"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop"
      },
      {
        title: "Inventory Management System",
        description: "A robust inventory system for tracking products, managing suppliers, generating reports, and handling orders.",
        technologies: ["Django", "MySQL", "Chart.js", "jQuery"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=250&fit=crop"
      }
    ],
    "MERN Stack Projects": [
      {
        title: "Social Media Platform",
        description: "A full-stack social media application with real-time messaging, post sharing, friend connections, and media uploads.",
        technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop"
      },
      {
        title: "Expense Tracker",
        description: "A comprehensive expense tracking application with budget planning, category management, and financial analytics.",
        technologies: ["MongoDB", "Express.js", "React", "Node.js", "Chart.js"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop"
      },
      {
        title: "Real Estate Platform",
        description: "A property listing platform with advanced search filters, virtual tours, agent profiles, and booking system.",
        technologies: ["MongoDB", "Express.js", "React", "Node.js", "Mapbox"],
        github: "#",
        live: "#",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop"
      }
    ]
  };

  const ProjectCard = ({ project, index }) => (
    <div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        isVisible.projects ? 'animate-slideInUp' : 'opacity-0 translate-y-10'
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">{project.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors transform hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a href={project.github} className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">
            <Github size={18} className="mr-1" />
            Code
          </a>
          <a href={project.live} className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105">
            <ExternalLink size={18} className="mr-1" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );

  const SkillBar = ({ skill, level, index }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium">{skill}</span>
        <span className="text-blue-600 font-semibold">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div 
          className={`bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out ${
            isVisible.skills ? 'animate-fillBar' : 'w-0'
          }`}
          style={{ 
            width: isVisible.skills ? `${level}%` : '0%',
            animationDelay: `${index * 100}ms`
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fillBar {
          from { width: 0%; }
          to { width: var(--target-width, 100%); }
        }
        
        .animate-float {
          animation: float infinite ease-in-out;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-fadeInScale {
          animation: fadeInScale 0.8s ease-out forwards;
        }
        
        .animate-fillBar {
          animation: fillBar 1.5s ease-out forwards;
        }
        
        .typing-cursor::after {
          content: '|';
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              John Anderson
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === item ? 'text-blue-600 transform scale-105' : 'text-gray-700 hover:text-blue-600'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <AnimatedBackground />
        <FloatingParticles />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center animate-fadeInScale shadow-2xl hover:scale-110 transition-transform duration-500">
              <Code size={48} className="text-white animate-pulse" />
            </div>
            <div className="animate-slideInUp">
              <h1 className="text-2xl md:text-3xl font-medium text-gray-600 mb-2">
                Hello, I'm
              </h1>
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 typing-cursor">
                {typedText}
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </h3>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slideInUp" style={{ animationDelay: '1s' }}>
              Crafting digital experiences with modern web technologies. 
              Specialized in React, Django, and MERN stack development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideInUp" style={{ animationDelay: '1.5s' }}>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="animate-bounce" style={{ animationDelay: '2s' }}>
            <ChevronDown size={32} className="text-gray-400 mx-auto hover:text-blue-600 transition-colors cursor-pointer" onClick={() => scrollToSection('about')} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-purple-50/20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 ${isVisible.about ? 'animate-slideInUp' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible.about ? 'animate-slideInLeft' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Passionate Problem Solver</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm John Anderson, a dedicated full-stack developer with a passion for creating innovative web solutions. 
                With expertise in modern JavaScript frameworks, Python backend development, and database management, 
                I bring ideas to life through clean, efficient code.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My journey in web development has led me to master various technologies including React for dynamic 
                user interfaces, Django for robust backend systems, and the complete MERN stack for full-scale applications.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors transform hover:scale-105 duration-300">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-700">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors transform hover:scale-105 duration-300">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
              </div>
            </div>
            <div className={`grid grid-cols-2 gap-4 ${isVisible.about ? 'animate-slideInRight' : 'opacity-0'}`}>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <Globe size={32} className="mb-4 animate-pulse" />
                  <h4 className="font-semibold mb-2">Frontend Development</h4>
                  <p className="text-sm opacity-90">Creating responsive and interactive user interfaces</p>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <Database size={32} className="mb-4 animate-pulse" />
                  <h4 className="font-semibold mb-2">Database Design</h4>
                  <p className="text-sm opacity-90">Designing efficient and scalable database architectures</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 rounded-lg text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <Server size={32} className="mb-4 animate-pulse" />
                  <h4 className="font-semibold mb-2">Backend Development</h4>
                  <p className="text-sm opacity-90">Building robust server-side applications and APIs</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-lg text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <Smartphone size={32} className="mb-4 animate-pulse" />
                  <h4 className="font-semibold mb-2">Mobile Responsive</h4>
                  <p className="text-sm opacity-90">Ensuring perfect experience across all devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 ${isVisible.skills ? 'animate-slideInUp' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring your ideas to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <div 
                key={category} 
                className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible.skills ? 'animate-slideInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{category}</h3>
                <div className="space-y-4">
                  {skillList.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} skill={skill.name} level={skill.level} index={skillIndex} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 ${isVisible.projects ? 'animate-slideInUp' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my latest work across different technology stacks
            </p>
          </div>
          
          {Object.entries(projects).map(([category, projectList], categoryIndex) => (
            <div key={category} className="mb-16">
              <h3 className={`text-3xl font-bold text-gray-900 mb-8 text-center ${
                isVisible.projects ? 'animate-fadeInScale' : 'opacity-0'
              }`} style={{ animationDelay: `${categoryIndex * 300}ms` }}>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block">
                  {category}
                </span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectList.map((project, projectIndex) => (
                  <ProjectCard key={projectIndex} project={project} index={projectIndex} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 ${isVisible.contact ? 'animate-slideInUp' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can work together.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500 ${
              isVisible.contact ? 'animate-fadeInScale' : 'opacity-0'
            }`}>
              <div className="grid md:grid-cols-2 gap-12">
                <div className={`${isVisible.contact ? 'animate-slideInLeft' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    I'm always interested in new opportunities, challenging projects, and creative collaborations. 
                    Whether you have a project in mind or just want to chat about technology, feel free to reach out.
                  </p>
                  <div className="space-y-4">
                    <a href="mailto:john.anderson@example.com" className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 transform">
                      <Mail size={24} className="mr-4 text-blue-600" />
                      <span className="text-lg">john.anderson@example.com</span>
                    </a>
                    <a href="https://github.com/johnanderson" className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 transform">
                      <Github size={24} className="mr-4 text-blue-600" />
                      <span className="text-lg">github.com/johnanderson</span>
                    </a>
                    <a href="https://linkedin.com/in/johnanderson" className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 transform">
                      <Linkedin size={24} className="mr-4 text-blue-600" />
                      <span className="text-lg">linkedin.com/in/johnanderson</span>
                    </a>
                  </div>
                </div>
                <div className={`${isVisible.contact ? 'animate-slideInRight' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
                  <div className="space-y-6">
                    <div>
                      <div className="block text-gray-700 font-medium mb-2">Name</div>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <div className="block text-gray-700 font-medium mb-2">Email</div>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-300"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <div className="block text-gray-700 font-medium mb-2">Message</div>
                      <textarea 
                        rows="5" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none hover:border-blue-300"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    <button 
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300">
              John Anderson
            </div>
            <p className="text-gray-400 mb-4">
              Crafting digital experiences with passion and precision.
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://github.com/johnanderson" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/johnanderson" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform">
                <Linkedin size={24} />
              </a>
              <a href="mailto:john.anderson@example.com" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform">
                <Mail size={24} />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
              © 2025 John Anderson. Built with React & Tailwind CSS.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;