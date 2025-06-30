import React, { useEffect, useState } from 'react';
import {
    Home,
    FileText,
    Github,
    Linkedin,
    Mail,
    Sun,
    Moon
} from 'lucide-react';

const BottomNav = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Get from localStorage or system
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
        document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 dark:bg-gray-900/80 text-black dark:text-white border border-gray-200 dark:border-gray-700 shadow-lg rounded-full px-6 py-2 flex items-center justify-center gap-2 backdrop-blur-md">
            {/* Left Section */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                aria-label="Home"
            >
                <Home className="w-5 h-5" />
            </button>

            <a
                href="/Abhishek_Yadav_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                aria-label="View Resume"
            >
                <FileText className="w-5 h-5" />
            </a>
            <span className="h-6 w-[1px] bg-gray-300 dark:bg-gray-700 mx-1"></span>

            {/* Middle Section */}
            <a href="https://github.com/abhiyadav512" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all" aria-label="GitHub">
                <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/abhishek-yadav-407331311" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:your@email.com" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all" aria-label="Email">
                <Mail className="w-5 h-5" />
            </a>

            <span className="h-6 w-[1px] bg-gray-300 dark:bg-gray-700 mx-1"></span>

            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                aria-label="Toggle Theme"
            >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
        </div>
    );
};

export default BottomNav;
