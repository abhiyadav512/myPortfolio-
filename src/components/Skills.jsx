import React, { useState } from 'react';

const skills = [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 80 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 95 },
    { name: 'Python', level: 75 },
    { name: 'PostgreSQL', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'JavaScript', level: 98 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 95 },
    { name: 'MongoDB', level: 85 },
    { name: 'Express.js', level: 95 },
    { name: 'Git', level: 90 },
];

const SkillBadge = ({ skill, level }) => {
    return (
        <div className="relative w-full py-2 px-10 flex items-center justify-center bg-black dark:bg-white rounded-lg cursor-default group duration-300">
            <span className="text-xs font-semibold text-white dark:text-black select-none">{skill}</span>
            <div className="absolute -top-2 -right-2 bg-gray-200 dark:bg-gray-800 text-xs px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 select-none">
                {level}%
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold mb-8 text-black dark:text-white">Skills</h2>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 sm:gap-6 justify-items-center">
                {skills.map((skillItem, index) => (
                    <SkillBadge key={index} skill={skillItem.name} level={skillItem.level} />
                ))}
            </div>
        </div>
    );
};

export default Skills;
