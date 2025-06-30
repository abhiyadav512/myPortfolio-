import React, { useState, useEffect } from 'react';
import { Globe, Calendar, Code, ExternalLink, Github } from 'lucide-react';
import { Film, Gamepad2, ShoppingCart } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Movie Browser App",
        subtitle: "Browse movies and TV series",
        description:
            "A modern movie browsing application built with React and Redux. Features a clean, intuitive UI for discovering movies and TV series with advanced filtering and search capabilities.",
        period: "2024",
        technologies: ["React", "Redux", "React Router", "JavaScript", "HTML", "CSS"],
        notifications: [
            { icon: "🎬", title: "New movie added", subtitle: "Latest releases updated", time: "2h ago" },
            { icon: "⭐", title: "User rating", subtitle: "4.8/5 stars", time: "5h ago" },
            { icon: "👥", title: "Active users", subtitle: "1.2k daily visitors", time: "1 day ago" }
        ],
        headerColor: "bg-purple-400",
        websiteUrl: "https://movieeshub.netlify.app",
        githubUrl: "https://github.com/abhiyadav512/MovieHub-react-redux-toolkit",
        icon: <Film className="w-6 h-6" />
    },
    {
        id: 2,
        title: "MERN TypeRacer",
        subtitle: "Real-time multiplayer typing game",
        description:
            "An engaging real-time multiplayer typing game featuring Google authentication, interactive progress bars, and live race updates. Built with the MERN stack and Socket.io for seamless real-time communication between players.",
        period: "2024",
        technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "Google Auth", "JavaScript"],
        notifications: [
            { icon: "🏁", title: "Race completed", subtitle: "95 WPM achieved!", time: "10m ago" },
            { icon: "🎮", title: "New player joined", subtitle: "Room #12345", time: "15m ago" },
            { icon: "🏆", title: "High score", subtitle: "Personal best: 102 WPM", time: "1h ago" }
        ],
        headerColor: "bg-green-400",
        githubUrl: "https://github.com/abhiyadav512/mern-typeracer",
        websiteUrl: "https://mern-type-racer.vercel.app",
        icon: <Gamepad2 className="w-6 h-6" />
    },
    {
        id: 3,
        title: "OneClothes",
        subtitle: "Full-stack e-commerce platform",
        description:
            "A comprehensive e-commerce platform built with the PERN stack. Features include an Admin Dashboard, product management, secure auth, and smooth user experience.",
        period: "2024",
        technologies: ["PostgreSQL", "Express.js", "React", "Node.js", "JavaScript", "HTML", "CSS"],
        notifications: [
            { icon: "🛒", title: "New order placed", subtitle: "Order #ORD-2024-001", time: "30m ago" },
            { icon: "💰", title: "Payment received", subtitle: "₹2,499.00", time: "45m ago" },
            { icon: "📦", title: "Product updated", subtitle: "Admin Dashboard", time: "2h ago" }
        ],
        headerColor: "bg-blue-400",
        websiteUrl: "https://oneclothes.vercel.app",
        githubUrl: "https://github.com/abhiyadav512/oneClothes-E-Commerce-Website",
        icon: <ShoppingCart className="w-6 h-6" />
    }
];

const ProjectCard = ({ project, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 200);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'} hover:shadow-2xl hover:scale-105`}>
            <div className={`${project.headerColor} p-6 relative overflow-hidden`}>
                <div className="bg-white dark:bg-black rounded-xl p-6 mx-2 relative z-10 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black">
                                {project.icon}
                            </div>
                            <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Abhishek Yadav</span>
                        </div>
                        <button onClick={() => setShowNotifications(!showNotifications)}>
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </button>
                    </div>
                    <h2 className=" font-bold text-black dark:text-white mb-2">{project.title}</h2>
                    <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">{project.subtitle}</p>
                </div>

                <div className={`absolute top-4 right-4 space-y-2 transition-all duration-500 ${showNotifications ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                    {project.notifications.map((note, i) => (
                        <div key={i} className="bg-white dark:bg-black rounded-sm p-3 shadow-lg border border-gray-100 dark:border-gray-700 min-w-[280px] hover:scale-105 transition-all">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-lg">{note.icon}</div>
                                <div>
                                    <p className="text-xs font-semibold text-gray-900 dark:text-white">{note.title}</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">{note.subtitle}</p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500">{note.time}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-black dark:text-white">{project.title}</h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{project.period}</span>
                    </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">{project.description}</p>

                <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                        <Code className="w-4 h-4 mr-2" /> Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                            <span key={i} className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-1.5 rounded-full text-xs font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex space-x-3">
                    <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-black dark:bg-white text-white dark:text-black py-2 px-4  rounded-lg flex items-center justify-center space-x-2 hover:opacity-90">
                        <Globe className="w-4 h-4" /> <span className="font-medium  text-xs">Live Demo</span> <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:opacity-90">
                        <Github className="w-4 h-4" /> <span className="font-medium text-xs">Code</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setStartAnimation(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 ${startAnimation ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <h1 className=" font-semibold py-4 text-white dark:text-black text-center "><span className='dark:bg-white bg-black py-2 px-4 rounded-xl'>Projects</span></h1>
                <div className="text-center mb-12">
                    <h2 className="text-xl font-bold text-black dark:text-white mb-4">Check out my latest work</h2>
                    <p className="text-md text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A showcase of my full-stack development projects, from movie browsers to e-commerce platforms.
                        Each project demonstrates different aspects of modern web development.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;