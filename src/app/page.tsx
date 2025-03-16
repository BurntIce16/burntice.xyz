import Header from './components/header';
import Footer from './components/footer';
import Image from 'next/image';
import Link from 'next/link';
import PopText from './components/popText';
import Selfie from './components/selfie';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center pt-32 gap-8">
        <h1 className="text-4xl font-bold">Hi I'm <PopText text="Casey!" dance></PopText></h1>
        <h2 className="text-2xl text-gray-600">She/They</h2>
        
        {/* Image scaling not working */}
        <Selfie img="/casey.jpg" alt="Picture of me!" width={400} height={400} className="rounded-full aspect-square object-cover w-50 h-50 sm:w-100:flex sm:h-100:flex"></Selfie>

        <div className="space-y-4 text-center text-lg max-w-3xl">
          <p>
            Im a <PopText text="Robotics Engineering" color="text-red-500"></PopText> and <PopText color="text-blue-500" text="Computer Science"></PopText> major at Worcester Polytechnic Institute!
          </p>
          <p>
            I love 3D printing, robotics, low level programming, and making new things.
          </p>
          <p>
            Feel free to look through my <Link href="projects"><PopText text='projects' color='text-purple-500'></PopText></Link> and reach me at my socials below.
          </p>
        </div>

      </main>
      <Footer />
    </div>
  );
}
  