'use client'
import React from 'react';
import { motion } from 'framer-motion'; // Correct import

interface PopTextProps {
    text: string;
    color?: string;
    dance?: boolean;
}

const PopText: React.FC<PopTextProps> = ({ text, color, dance }) => {
    return (
        <motion.button
            initial={false}
            animate={{ scale: 1 }}
            whileHover={{ 
                scale: 1.05 ,
                y: -5,
                ...(dance ? { //only rotate if dance is true
                    rotate: [0, -3, 3, -3, 3, 0],
                    transition: {
                        rotate: {
                            repeat: Infinity,
                            duration: 0.5
                        }
                    }
                } : {})
            }}
            whileTap={{ scale: 0.9 }}
            className={color}
        >
            {text}
        </motion.button>
    );
};

export default PopText;
