import Header from '../components/header';
import Footer from '../components/footer';
import ProjectCover from '../components/projectCover';

export default function Projects() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <h1 className="text-4xl font-bold text-center mt-8">Projects and Experiments</h1>

            <main className="flex-grow container mx-auto px-8 py-8">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    {/* First project spans 2 columns on md and lg screens */}

                    <ProjectCover
                        href={'/projects/chip8-update'}
                        img={'/chip8-update/interface.png'}
                        description={'C++ Chip8 Emulator Update'}
                        width={600}
                        height={300}
                    />

                    <ProjectCover
                        href={'/projects/breakcheck'}
                        img={'/breakcheck/preFight.png'}
                        description={'3D Printed 1Lb Combat Robot'}
                        width={600}
                        height={300}
                    />

                    {/* Rest take up normal space */}
                    <ProjectCover
                        href={'/projects/v0'}
                        img={'/printer/ender.jpg'}
                        description={'Custom High Speed 3D Printer'}
                        width={600}
                        height={300}
                    />

                    <ProjectCover
                        href={'/projects/marble'}
                        img={'/marble/completeNoDec.png'}
                        description={'Marble Run Kinetic Sculpture'}
                        width={600}
                        height={300}
                    />

                    <ProjectCover
                        href={'/projects/chip8'}
                        img={'/chip8/chip8.png'}
                        description={'C++ Chip8 Emulator'}
                        width={600}
                        height={300}
                    />

                    <ProjectCover
                        href={'/projects/qrCode'}
                        img={'/qrCode/qrCode.png'}
                        description={'Shy QR Code Art Project'}
                        width={600}
                        height={300}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}
