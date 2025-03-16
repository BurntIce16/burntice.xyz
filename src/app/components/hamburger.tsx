import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface LinkItem {
  href: string;
  label: string;
}

interface HamburgerProps {
  className?: string;
  links: LinkItem[];
}

const Hamburger: React.FC<HamburgerProps> = ({ className, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <motion.button
        initial={false}
        animate={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-end"
      >
        <RxHamburgerMenu size={40} />
      </motion.button>


      <AnimatePresence>
        {isOpen && (
            <motion.div 
                key="modal" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
            >
                <div className="absolute right-0 top-full mt-2 bg-transparent shadow-md rounded-md z-50">
                <div className="flex flex-col items-end gap-4 p-4">
                    {links && links.map((link, index) => (
                    <a key={index} href={link.href} className="text-xl hover:text-blue-600">
                        {link.label}
                    </a>
                    ))}
                </div>
                </div>
            </motion.div>
        )}
        </AnimatePresence>


    </div>
  );
};

export default Hamburger;