'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface PopTextProps {
    img: string;
    alt: string;
    width: number;
    height: number;
    className: string;
}

const Selfie: React.FC<PopTextProps> = ({ img, alt, width, height, className }) => {
    return (
        <motion.button
            initial={false}
            animate={{ scale: 1 }}
            whileHover={{ 
            rotate: 360,
            transition: {
                rotate: {
                repeat: Infinity,
                duration: 5,
                ease: "linear"
                }
            }
            }}
            whileTap={{ scale: 0.9 }}
        >
            <Image src={img} alt={alt} width={width} height={height} className={className}></Image>
        </motion.button>
    );
};

export default Selfie;