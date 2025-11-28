import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from '@/app/components/banner';
import Link from 'next/link';
import PopText from '@/app/components/popText';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Banner imageSrc="/chip8-update/interface.png" altText="Voron V0 based 3D printer" height={300} verticalPosition={40} />
      <main className="flex-grow flex flex-col items-center pt-12 gap-8 px-4 md:px-8">
        <h1 className="text-4xl font-bold">C++ Chip8 Emulator Update</h1>



        <p className='text-lg'>
          Hey, its been a while. I wanted to give a quick update on this project. Since my initial release, I've made several improvements and added new features to enhance the overall experience.
        </p>


        <h1 className="text-3xl md:text-4xl font-bold">The Issues</h1>

        <p className='text-lg'>
          Per my previous post the emulator was having significant timing issues. Even to the point that the system was essentially unplayable. After some analysis and profiling using Valgrind's callgrind tool, I identified several key areas that were causing performance bottlenecks:
        </p>

        <ul className="list-disc list-inside text-lg">
          <li>Both the debugger interface and chip8 interface were being rendered at the emulation loop frequency, rather than at a fixed 60hz rate.</li>
          <li>There was no text or texture caching, leading to the entire GUI being redrawn every frame, which is particularly expensive when using TTF fonts instead of bitmap fonts.</li>
          <li>All of the timers and inputs were coupled to the game loop rather than real time, causing inconsistencies in timing and responsiveness.</li>
        </ul>

        <h1 className="text-3xl md:text-4xl font-bold">The fixes</h1>


        <p className='text-lg'>
          The first issue was a very simple fix but took an embarrassingly long to identify. However by using valgrind and slowly profiling the various calls made I was able to identify the root cause and fix it fairly quickly, instantly boosting performance by nearly 2x.
        </p>

        <p className='text-lg'>
          The second issue took a bit longer to resolve as I had to implement a caching system for both text and textures. My younger brother who has a background in computer graphics helped me understand some of the best practices when it came to caching in SDL2. By storing rendered text and textures in memory and only redrawing them when necessary, I was able to significantly reduce the rendering overhead. This change alone resulted in a substantial performance improvement in its own right.
        </p>

        <p className='text-lg'>
          The third issue required decoupling the timers and input handling from the main emulation loop. By implementing a separate timing mechanism that operates independently of the game loop, I was able to ensure that timers and inputs are processed in real time. This change didn't result in a direct increase to performance, but rather greatly improved the overall responsiveness and accuracy of the emulator. It additionally resolved the issues regarding user inputs being dropped which was preventing games from being playable.
        </p>

        <h1 className="text-3xl md:text-4xl font-bold">Updated demo</h1>



        <div className="w-full max-w-md md:max-w-2xl">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/ttRDQJiPkiI?si=zj9Ygwem5xqXzcrf" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        


        <h1 className="text-3xl md:text-4xl font-bold">Future work</h1>


        <p className='text-lg'>
          At the point im happy enough with the performance of the emulator for now. For the time being I plan to shift my focus to finishing the core functionality of the system. Primarily in regards to audio emulation as well as adding support for more opcodes and features such as Super Chip8 extensions. Once these changes have been implemented I plan on adding a launcher interface using imgui to allow for easier rom selection and configuration, with additional settings like color pallets and input mapping/controller support.Unfortunately due to time constraints I likely wont be able to work on this project much over the next couple months due to my work on FSAE and classes, but I do plan to return to it in the near future.
        </p>



        <h1 className="text-3xl md:text-4xl font-bold">References that helped me (and maybe you!)</h1>

        <ul className="list-disc list-inside">
          <li>
            <Link href="https://multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/">How to write an emulator (CHIP-8 interpreter)</Link>
          </li>
          <li>
            <Link href="https://en.wikipedia.org/wiki/CHIP-8#Opcode_table">Wikipedia</Link>
          </li>
          <li>
            <Link href="https://github.com/corax89/chip8-test-rom">chip8-test-rom</Link>
          </li>
          <li>
            <Link href="https://github.com/Timendus/chip8-test-suite">CHIP-8 test suite</Link>
          </li>
        </ul>


        <br></br>


        <p className='text-lg'>
          All code for this project is available on my GitHub <Link href="https://github.com/BurntIce16/Chip8Emu"><PopText text='here' color='text-blue-500'></PopText></Link> if you're interested!
        </p>


      </main>
      <Footer />
    </div>
  );
}
