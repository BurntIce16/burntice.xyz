import { ReactNode } from 'react';

interface LabeledImageProps {
    children: ReactNode;
    label: string;
    className?: string;
}

const LabeledImage: React.FC<LabeledImageProps> = ({ 
    children, 
    label,
    className = "" 
}) => {
    return (
        <div className={`flex flex-col items-center gap-2 ${className}`}>
            {children}
            <p className="text-gray-700 text-lg text-center">
                {label}
            </p>
        </div>
    );
};

export default LabeledImage;