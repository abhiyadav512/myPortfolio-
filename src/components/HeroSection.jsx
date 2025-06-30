import React from 'react';

const HeroSection = () => {
    return (
        <div className="flex justify-between items-center w-full max-w-4xl mx-auto mt-4">
            <div>
                <h1 className="text-3xl font-bold text-black dark:text-white">
                    Hi, I'm Abhishek 👋
                </h1>
                <p className="text-md py-2 text-gray-700 dark:text-gray-300">
                    Full stack developer, I love to create websites.
                </p>
            </div>
            <img
                src="/abhi.png"
                alt="Abhishek Yadav"
                className="w-24 h-24 rounded-full object-cover shadow-md ring-2 ring-gray-300 dark:ring-gray-600 transition duration-300"
            />
        </div>
    );
};

export default HeroSection;
