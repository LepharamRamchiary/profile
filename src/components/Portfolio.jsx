import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Server,
  Smartphone,
  ChevronDown,
} from "lucide-react";

// Floating particles animation component
const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-blue-400/20 rounded-full animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
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
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});
  const [typedText, setTypedText] = useState("");
  const fullText = "Lepharam Ramchiary";

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
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = {
    Frontend: [
      { name: "React", level: 70 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 50 },
      { name: "HTML/CSS", level: 80 },
      { name: "Tailwind CSS", level: 80 },
      { name: "React Native Expo", level: 50 },
      { name: "Redux toolkit", level: 70 },
    ],
    Backend: [
      { name: "Node.js", level: 70 },
      { name: "Python", level: 50 },
      { name: "Django", level: 50 },
      { name: "Express.js", level: 70 },
      { name: "REST APIs", level: 70 },
      { name: "Swagger(API Docs)", level: 60 },
      { name: "Postman(API testing)", level: 70 },
    ],
    Database: [
      { name: "MongoDB", level: 70 },
      { name: "PostgreSQL", level: 30 },
      { name: "MySQL", level: 50 },
      { name: "Cloudinary", level: 50 },
      { name: "Firebase", level: 50 },
    ],
    DevOps: [
      { name: "GitHub (GitHub Action)", level: 90 },
      { name: "CI/CD Pipeline", level: 50 },
      { name: "AWS (EC2)", level: 50 },
      { name: "Linux", level: 30 },
      { name: "Vercel", level: 70 },
      { name: "Render", level: 70 },
    ],
  };

  const projects = {
    "React Projects": [
      {
        title: "Disney+ clone",
        description:
          "Developing a Disney Plus clone frontend using React, Firebase, and styled-components. Create a user-friendly interface replicating Disney Plus features.",
        technologies: [
          "React",
          "Firebase",
          "CSS",
          "React Router",
          "JavaScript",
        ],
        github: "https://github.com/LepharamRamchiary/disney_clone",
        live: "https://disneyplus-clone-ce3ad.web.app",
        image:
          "https://my-new-portfolio-ebon-six.vercel.app/static/media/project1.c577bd66e87daef2e071.avif",
      },
      {
        title: "ExploreEcho",
        description:
          "Explore a beautiful destination through a simple website featuring attractions, culture, cuisine, travel tips, images, and a contact form for inquiries.",
        technologies: ["React", "CSS", "JavaScript", "React Router", "Vercel"],
        github: "https://github.com/LepharamRamchiary/ExploreEcho",
        live: "https://explore-echo-rust.vercel.app",
        image:
          "https://my-new-portfolio-ebon-six.vercel.app/static/media/echo.7df6f94ac5f564d53473.avif",
      },
      {
        title: "Youtube",
        description:
          "This application replicates some of the core features of YouTube, allowing users to view, search for, and watch videos. It utilizes the YouTube Data API provided by Rapid API to fetch video data and display it in a user-friendly interface.",
        technologies: [
          "React",
          "Rapid API",
          "Tailwind CSS",
          "Context API",
          "Netlify",
        ],
        github: "https://github.com/LepharamRamchiary/Youtube_Clone",
        live: "https://incredible-naiad-ec220e.netlify.app",
        image:
          "https://my-new-portfolio-ebon-six.vercel.app/static/media/youtub.6980d2765fff74d7c8fd.avif",
      },
    ],
    "AI Agent": [
      {
        title: "Healthcare Assistant",
        description:
          "This web application acts as a smart and empathetic healthcare assistant powered by Google’s Gemini AI. It offers general health information, wellness tips, and guidance on common symptoms—while ensuring it doesn't replace professional medical advice.",
        technologies: [
          "LLM(Gemini API)",
          "Python",
          "Flask",
          "CSS",
          "HTML",
          "JavaScript",
          "Vercel",
        ],
        github: "https://github.com/LepharamRamchiary/healthcare_assistant",
        live: "https://healthcare-assistant-three.vercel.app",
        image:
          "data:image/jpeg;base64,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",
      },
      {
        title: "CodeConversion",
        description:
          "CodeConversion is an AI-powered web application that allows developers to convert code between multiple programming languages and run code instantly for select languages.",
        technologies: [
          "LLM(Gemini API)",
          "Python",
          "Django",
          "CSS",
          "HTML",
          "JavaScript",
          "Render",
        ],
        github: "https://github.com/LepharamRamchiary/code-conversion-ai-agent",
        live: "https://code-conversion-ai-agent.onrender.com",
        image:
          "data:image/png;base64,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",
      },
    ],
    "Django Full Stack Projects": [
      {
        title: "Community Guardian",
        description:
          "A web platform where citizens can report, track, and discuss local issues like broken roads, garbage problems, water supply issues, or streetlight outages — visible to local authorities and the community.",
        technologies: [
          "Django",
          "PostgreSQL",
          "TaiwindCss",
          "Python",
          "Cloudinary",
          "Render",
        ],
        github: "https://github.com/LepharamRamchiary/community_guardian",
        live: "https://community-guardian.onrender.com",
        image:
          "data:image/jpeg;base64,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",
      },
    ],
    "MERN Stack Projects": [
      {
        title: "Developer's Blog",
        description:
          "Developer's Blog is a comprehensive blogging platform designed specifically for developers to share their knowledge, experiences, and insights. The application features two distinct panels: one for users and another for administrators.",
        technologies: [
          "MongoDB",
          "Express.js",
          "React",
          "Node.js",
          "Vite",
          "Tailwind CSS",
          "Flowbite",
          "Render",
        ],
        github: "https://github.com/LepharamRamchiary/Developer-Hub-Blog",
        live: "https://developer-hub-blog.onrender.com",
        image:
          "https://my-new-portfolio-ebon-six.vercel.app/static/media/dev.a3968eb0a3bc440742f5.png",
      },
      {
        title: "WhatsApp Clone",
        description:
          "Develop a WhatsApp clone frontend using React, Express, and MongoDB without hosting. Create messaging functionalities, user authentication, and real-time updates.",
        technologies: ["MongoDB", "Express.js", "React", "Node.js"],
        github: "https://github.com/LepharamRamchiary/Whatsapp-Clone",
        live: "https://github.com/LepharamRamchiary/Whatsapp-Clone",
        image:
          "https://my-new-portfolio-ebon-six.vercel.app/static/media/project2.e33713f360c363feb7b9.avif",
      },
    ],

    "DevOps Projects": [
      {
        title: "Test Project",
        description:
          "This project sets up a CI/CD pipeline using GitHub Actions to deploy a Node.js application on an AWS EC2 server. It runs tests and builds on every push, then automatically deploys the latest code with PM2 for process management.",
        technologies: [
          "GitHub Actions",
          "Node.js",
          "JavaScript",
          "AWS(EC2)",
          "PM2",
        ],
        github: "https://github.com/LepharamRamchiary/only-backend-cicd",
        live: "http://ec2-16-171-30-120.eu-north-1.compute.amazonaws.com/api-docs",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAABUoTg0hRIRysVXsNZg21ojLCOSsljUElA&s",
      },
    ],
  };

  const ProjectCard = ({ project, index }) => (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        isVisible.projects ? "animate-slideInUp" : "opacity-0 translate-y-10"
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>
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
          <a
            target="_blank"
            href={project.github}
            className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
          >
            <Github size={18} className="mr-1" />
            Code
          </a>
          <a
            target="_blank"
            href={project.live}
            className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
          >
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
            isVisible.skills ? "animate-fillBar" : "w-0"
          }`}
          style={{
            width: isVisible.skills ? `${level}%` : "0%",
            animationDelay: `${index * 100}ms`,
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }

        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
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
          from {
            width: 0%;
          }
          to {
            width: var(--target-width, 100%);
          }
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
          content: "|";
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              My Profile
            </div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize font-medium transition-all duration-300 hover:scale-105 ${
                      activeSection === item
                        ? "text-blue-600 transform scale-105"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
      >
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
                  Software Engineer
                </span>
              </h3>
            </div>
            <p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slideInUp"
              style={{ animationDelay: "1s" }}
            >
              Crafting digital experiences with modern web technologies.
              Specialized in React, Django, NodeJS, and MERN stack development.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideInUp"
              style={{ animationDelay: "1.5s" }}
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="animate-bounce" style={{ animationDelay: "2s" }}>
            <ChevronDown
              size={32}
              className="text-gray-400 mx-auto hover:text-blue-600 transition-colors cursor-pointer"
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-purple-50/20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-16 ${
              isVisible.about ? "animate-slideInUp" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`${
                isVisible.about ? "animate-slideInLeft" : "opacity-0"
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Passionate Problem Solver
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm Lepharam Ramchiary, a dedicated full-stack developer with a
                passion for creating innovative web solutions. With expertise in
                modern JavaScript frameworks, Python backend development, and
                database management, I bring ideas to life through clean,
                efficient code.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My journey in web development has led me to master various
                technologies including React for dynamic user interfaces, Django
                for robust backend systems, and the complete MERN stack for
                full-scale applications.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors transform hover:scale-105 duration-300">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    7+
                  </div>
                  <div className="text-gray-700">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors transform hover:scale-105 duration-300">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    0+
                  </div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
              </div>
            </div>
            <div
              className={`grid grid-cols-2 gap-4 ${
                isVisible.about ? "animate-slideInRight" : "opacity-0"
              }`}
            >
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <Globe size={32} className="mb-4 animate-pulse" />
                  <h4 className="font-semibold mb-2">Frontend Development</h4>
                  <p className="text-sm opacity-90">
                    Creating responsive and interactive user interfaces
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <Database size={32} className="mb-4 animate-pulse" />
                  <h4 className="font-semibold mb-2">Database Design</h4>
                  <p className="text-sm opacity-90">
                    Designing efficient and scalable database architectures
                  </p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 rounded-lg text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <Server size={32} className="mb-4 animate-pulse" />
                  <h4 className="font-semibold mb-2">Backend Development</h4>
                  <p className="text-sm opacity-90">
                    Building robust server-side applications and APIs
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-lg text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <Smartphone size={32} className="mb-4 animate-pulse" />
                  <h4 className="font-semibold mb-2">Mobile Responsive</h4>
                  <p className="text-sm opacity-90">
                    Ensuring perfect experience across all devices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="py-20 bg-gray-50 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-16 ${
              isVisible.skills ? "animate-slideInUp" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring your
              ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(
              ([category, skillList], categoryIndex) => (
                <div
                  key={category}
                  className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-5 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 border border-white/20 ${
                    isVisible.skills ? "animate-slideInUp" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${categoryIndex * 200}ms` }}
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                  {/* Category Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      {category === "Frontend" && (
                        <Globe size={20} className="text-white" />
                      )}
                      {category === "Backend" && (
                        <Server size={20} className="text-white" />
                      )}
                      {category === "Database" && (
                        <Database size={20} className="text-white" />
                      )}
                      {category === "DevOps" && (
                        <Code size={20} className="text-white" />
                      )}
                    </div>
                  </div>

                  {/* Category Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-5 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {category}
                  </h3>

                  {/* Skills Grid */}
                  <div className="space-y-4">
                    {skillList.map((skill, skillIndex) => (
                      <div key={skillIndex} className="relative">
                        {/* Skill Name and Percentage */}
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 font-medium text-sm group-hover:text-gray-900 transition-colors">
                            {skill.name}
                          </span>
                          <div className="flex items-center space-x-1">
                            <span className="text-blue-600 font-bold text-xs">
                              {skill.level}%
                            </span>
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                          </div>
                        </div>

                        {/* Animated Progress Bar */}
                        <div className="relative w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full transition-all duration-1000 ease-out shadow-sm ${
                              isVisible.skills ? "animate-fillBar" : "w-0"
                            }`}
                            style={{
                              width: isVisible.skills
                                ? `${skill.level}%`
                                : "0%",
                              animationDelay: `${
                                categoryIndex * 200 + skillIndex * 100
                              }ms`,
                            }}
                          >
                            {/* Glowing effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Category Performance Ring */}
                  <div className="mt-5 flex justify-center">
                    <div className="relative w-14 h-14">
                      <svg className="transform -rotate-90 w-14 h-14">
                        <circle
                          cx="28"
                          cy="28"
                          r="24"
                          stroke="currentColor"
                          strokeWidth="3"
                          fill="transparent"
                          className="text-gray-200"
                        />
                        <circle
                          cx="28"
                          cy="28"
                          r="24"
                          stroke="url(#gradient)"
                          strokeWidth="3"
                          fill="transparent"
                          strokeDasharray={`${2 * Math.PI * 24}`}
                          strokeDashoffset={`${
                            2 *
                            Math.PI *
                            24 *
                            (1 -
                              skillList.reduce(
                                (acc, skill) => acc + skill.level,
                                0
                              ) /
                                skillList.length /
                                100)
                          }`}
                          className="transition-all duration-1000 ease-out"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="50%" stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#EC4899" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                          {Math.round(
                            skillList.reduce(
                              (acc, skill) => acc + skill.level,
                              0
                            ) / skillList.length
                          )}
                          %
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${i * 200}ms`,
                          animationDuration: "2s",
                        }}
                      />
                    ))}
                  </div>
                </div>
              )
            )}
          </div>

          {/* Additional Stats Section */}
          <div
            className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 ${
              isVisible.skills ? "animate-slideInUp" : "opacity-0"
            }`}
            style={{ animationDelay: "1s" }}
          >
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Technologies</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-purple-600 mb-2">7+</div>
              <div className="text-gray-700 font-medium">Projects</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Dedication</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
              <div className="text-gray-700 font-medium">Learning</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-16 ${
              isVisible.projects ? "animate-slideInUp" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my latest work across different technology stacks
            </p>
          </div>

          {Object.entries(projects).map(
            ([category, projectList], categoryIndex) => (
              <div key={category} className="mb-16">
                <h3
                  className={`text-3xl font-bold text-gray-900 mb-8 text-center ${
                    isVisible.projects ? "animate-fadeInScale" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${categoryIndex * 300}ms` }}
                >
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block">
                    {category}
                  </span>
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectList.map((project, projectIndex) => (
                    <ProjectCard
                      key={projectIndex}
                      project={project}
                      index={projectIndex}
                    />
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-16 ${
              isVisible.contact ? "animate-slideInUp" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can
              work together.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div
              className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500 ${
                isVisible.contact ? "animate-fadeInScale" : "opacity-0"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-12">
                <div
                  className={`${
                    isVisible.contact ? "animate-slideInLeft" : "opacity-0"
                  }`}
                  style={{ animationDelay: "300ms" }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Let's Connect
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    I'm always interested in new opportunities, challenging
                    projects, and creative collaborations. Whether you have a
                    project in mind or just want to chat about technology, feel
                    free to reach out.
                  </p>
                  <div className="space-y-4">
                    <a
                      target="_blank"
                      href="mailto:lepharamchiary@gmail.com"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 transform"
                    >
                      <Mail size={24} className="mr-4 text-blue-600" />
                      <span className="text-lg">lepharamchiary@gmail.com</span>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/LepharamRamchiary"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 transform"
                    >
                      <Github size={24} className="mr-4 text-blue-600" />
                      <span className="text-lg">
                        github.com/LepharamRamchiary
                      </span>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/lepharam-ramchiary-576282215"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 transform"
                    >
                      <Linkedin size={24} className="mr-4 text-blue-600" />
                      <span className="text-lg">
                        linkedin.com/in/lepharam-ramchiary
                      </span>
                    </a>
                  </div>
                </div>

                <div
                  className={`flex justify-center items-center ${
                    isVisible.contact ? "animate-slideInRight" : "opacity-0"
                  }`}
                  style={{ animationDelay: "500ms" }}
                >
                  <img
                    src="/gitpro.png"
                    alt="Lepharam Ramchiary"
                    className="w-64 h-64 object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-500"
                  />
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
              Lepharam Ramchiary
            </div>
            <p className="text-gray-400 mb-4">
              Crafting digital experiences with passion and precision.
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a
                target="_blank"
                href="https://github.com/LepharamRamchiary"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform"
              >
                <Github size={24} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/lepharam-ramchiary-576282215"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform"
              >
                <Linkedin size={24} />
              </a>
              <a
                target="_blank"
                href="mailto:lepharamchiary@gmail.com"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform"
              >
                <Mail size={24} />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
              © {new Date().getFullYear()} Lepharam Ramchiary
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
