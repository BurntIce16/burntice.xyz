import Header from '../components/header';
import Footer from '../components/footer';
import ProjectCover from '../components/projectCover';

export default function Projects() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <h1 className="text-4xl font-bold text-center">Projects and Experiments</h1>

            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <ProjectCover
                        href={'projects/breakcheck'}
                        img={'/breakcheck/old_bot.png'}
                        description={'3D Printed 1Lb Combat Robot'}
                        width={1000}
                        height={500}
                    />

                    <div></div>


                    <ProjectCover
                        href={'projects/v0'}
                        img={'/printer/ender.jpg'}
                        description={'Custom High Speed 3D Printer'}
                        width={500}
                        height={500}
                    />
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    <ProjectCover
                        href={'projects/marble'}
                        img={'/marble/run.jpg'}
                        description={'Marble Run Kinetic Sculpture'}
                        width={500}
                        height={500}
                    />

                    <ProjectCover
                        href={'projects/chip8'}
                        img={'/chip8/chip8.png'}
                        description={'C++ Chip8 Emulator'}
                        width={1000}
                        height={500}
                    />
                </div>

            </main>

            <Footer />
        </div>
    );
}
