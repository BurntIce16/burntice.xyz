import Image from "next/image";
import Link from "next/link";

interface ProjectCoverProps {
    href: string;
    img: string;
    description: string;
    width: number;
    height: number;
}

const ProjectCover: React.FC<ProjectCoverProps> = ({ href, img, description, width, height }) => {
    const aspectRatio = height / width;
    
    return (
        <Link href={href} className="block w-full">
            <div className="relative group overflow-hidden rounded-3xl w-full" 
                 style={{ paddingBottom: `${aspectRatio * 100}%` }}>
                <Image 
                    src={img} 
                    alt={description}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pb-6 pt-12 px-4">
                    <p className="text-white text-xl md:text-2xl">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCover;