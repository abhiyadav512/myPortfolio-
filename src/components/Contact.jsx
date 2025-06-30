import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section className="w-full max-w-4xl mx-auto py-10 mb-20">
            <h2 className=" font-semibold dark:text-black text-white text-center mb-4"><span className='dark:bg-white bg-black py-2 px-4 rounded-xl'>Contact Me</span></h2>

            <p className="text-md text-center text-gray-700 dark:text-gray-300 mb-6">
                Feel free to reach out via DM or email. I'm always open to opportunities, collaborations, or just a chat!
            </p>
        </section>
    );
};

export default Contact;
