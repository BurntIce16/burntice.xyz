'use client'
import { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-gray-800 hover:bg-gray-700 
                             text-white w-12 h-12 rounded-full shadow-lg 
                             flex items-center justify-center transition-all 
                             duration-300 z-50"
                    initial={{ x: 150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 150, opacity: 0 }}
                    transition={{ 
                        duration: 0.4,
                        ease: "easeInOut"
                    }}
                    aria-label="Back to top"
                >
                    <IoIosArrowUp size={24} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;