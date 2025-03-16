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
    return (
        <Link href={href} className="inline-block">
            <div className="relative group overflow-hidden inline-block rounded-3xl" style={{ width, height }}>
                <Image 
                    src={img} 
                    alt={description}
                    className="object-cover"
                    width={width}
                    height={height}
                    style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pb-6 pt-12 px-4">
                    <p className="text-white text-2xl">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCover;