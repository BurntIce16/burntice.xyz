import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="mt-auto w-full flex justify-between items-center p-4 shadow-md">
            <div>
                <p className="text-gray-600">&copy; 2025 Casey :)</p>
            </div>
            <nav>
                <ul className="flex gap-6">
                    <li><a href="https://github.com/BurntIce16" className="hover:text-blue-600">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/casey-midgley-709692269/" className="hover:text-blue-600">LinkedIn</a></li>
                </ul>
            </nav>
        </footer>
    );  
};

export default Footer;