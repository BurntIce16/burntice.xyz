"use client"

import React from 'react';
import Link from 'next/link';
import BackToTop from './backToTop';
import Hamburger from './hamburger';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-4 shadow-md">
            <div>
                <Link href="/"><h1 className="text-2xl font-bold">Casey</h1></Link>
                <p className="italic text-gray-600">She/They</p>
            </div>

            <nav className='hidden md:flex'>
                <ul className="flex gap-6">
                    <li><Link href="/projects" className="hover:text-blue-600">Projects</Link></li>
                    <li><Link href="resume" className="hover:text-blue-600">Resume</Link></li>
                </ul>
            </nav>

            <Hamburger className='flex md:hidden' links={[
                { href: "/projects", label: "Projects" },
                { href: "/resume", label: "Resume" }
            ]} />

            <BackToTop />
        </header>
    );
};

export default Header;