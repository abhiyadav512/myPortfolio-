import React from 'react';

const About = () => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-xl font-semibold mb-4 text-black dark:text-white">About Me</h1>
            <p className="text-md leading-7 text-gray-700 dark:text-gray-300">
                I’m a passionate Computer Science graduate with hands-on experience in building full-stack web applications.{' '}
                <span className="text-black dark:text-white font-semibold underline">
                    I specialize in transforming ideas into scalable, user-friendly solutions using modern technologies like
                    JavaScript, React, Node.js, and MongoDB.
                </span>{' '}
                I'm always eager to contribute to impactful projects, collaborate with teams, and grow continuously through learning and innovation.
            </p>
        </div>
    );
};

export default About;
