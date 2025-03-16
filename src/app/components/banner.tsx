import Image from 'next/image';

interface BannerProps {
    imageSrc: string;
    altText?: string;
    height?: number;
    verticalPosition?: number; // 0-100 percentage
}

const Banner: React.FC<BannerProps> = ({ 
    imageSrc, 
    altText = "Banner image",
    height = 400,
    verticalPosition = 50
}) => {
    return (
        <div className="relative w-full" style={{ height: `${height}px` }}>
            <Image
                src={imageSrc}
                alt={altText}
                fill
                priority
                className="object-cover"
                style={{ objectPosition: `center ${verticalPosition}%` }}
            />
        </div>
    );
};

export default Banner;