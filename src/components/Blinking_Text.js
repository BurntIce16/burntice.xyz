import React, { useState, useEffect } from 'react';

const BlinkingText = ({ text }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible((prevVisible) => !prevVisible);
        }, 1200);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <span style={{ visibility: isVisible ? 'visible' : 'hidden' }}>{text}</span>;
};

export default BlinkingText;