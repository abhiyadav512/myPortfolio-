import React from 'react';

const educationData = [
    {
        logo: '/higer-college.png',
        title: 'Sinhgad College of Science',
        subtitle: 'B.Sc. in Computer Science',
        date: '2022 – 2025',
        marks: '7.99 CGPA',
    },
    {
        logo: '/college.png',
        title: 'Maharshi Dayanand College',
        subtitle: 'Higher Secondary Certificate (HSC)',
        date: '2020 – 2022',
        marks: '50%',
    },
    {
        logo: '/logo.svg',
        title: 'Rameshwar Vidya Mandir',
        subtitle: 'Secondary School Certificate (SSC)',
        date: '2019 – 2020',
        marks: '81%',
    },
];

const Education = () => {
    return (
        <section className="w-full max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold mb-6 text-black dark:text-white">Education</h2>
            <div className="space-y-6">
                {educationData.map((edu, index) => (
                    <div key={index} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img
                                src={edu.logo}
                                alt={edu.title}
                                className="w-12 h-12 rounded-full object-contain border border-gray-300 dark:border-gray-600"
                            />
                            <div>
                                <h3 className="font-semibold text-sm text-black dark:text-white">{edu.title}</h3>
                                <p className="text-xs text-gray-600 dark:text-gray-400">{edu.subtitle}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <span>{edu.date}</span>
                            <span>{edu.marks}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
