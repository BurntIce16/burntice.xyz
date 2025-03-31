import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from '@/app/components/banner';
import Link from 'next/link';
import PopText from '@/app/components/popText';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Banner imageSrc="/chip8/chip8.png" altText="Voron V0 based 3D printer" height={300} verticalPosition={40} />
      <main className="flex-grow flex flex-col items-center pt-12 gap-8 px-4 md:px-8">
        <h1 className="text-4xl font-bold">C++ Chip8 Emulator</h1>



        <p className='text-lg'>
          I ended up taking a class at my university called "Machine organization and assembly" and it quickly became one of my favorite classes.
          As part of it we had to do a bunch of bit manipulation and assembly programming, through which I learned an appreciation for low level programming.
          However once the course was complete I found myself wanting to do more with it.
          After some googling I found that a popular project for learning low level programming is to create a simple Chip8 emulator.
          I then spent the next few weeks working on this project in my free time.
        </p>


        <h1 className="text-3xl md:text-4xl font-bold">The stack</h1>

        <p className='text-lg'>
          For this project I wanted to keep it simple and use a single language for everything.
          I ended up using C++ for the entire project, including the GUI.
          I used the SDL2 library for the graphics and input handling, which made it easy to create a window and handle keyboard input.
          I also used the CMake build system to manage the project, which makes it easy(ish) to compile and run on different platforms.
        </p>



        <h1 className="text-3xl md:text-4xl font-bold">Making the thing</h1>

        <p className='text-lg'>
          For this project I first focused on learning the fundamentals of the Chip8 architecture before writing any code.
          Fortunately, there are plenty of resources online that explain how it works and how to implement it (see references below).
          I additionally am lucky enough to exist in a time where I can look at existing implementations and gain an understanding into the thought processes and decisions they made while implementing their own version.
          I ended up using a few of these implementations as a reference for my own, and I think it helped me a lot.
        </p>

        <p className='text-lg'>
          After I had a basic understanding of the architecture I started implementing the CPU and memory.
          I decided to make a chip8 class that would handle all of the system emulation with a simple run function that could be called externally.
          The eventual hope is to separate the actual computing from the graphics and audio emulation, allowing someone to implement their own graphics and audio system if they wanted to.
          This seems a bit weird at first but my logic here was to make it easy to port to different platforms like an embedded system or a web browser.
        </p>

        <h1 className="text-3xl md:text-4xl font-bold">Testing and pitfalls</h1>

        <p className='text-lg'>
          Once I had a basic implementation of the CPU and memory I started testing it with a few simple programs.
          I used the chip8-test-suite to test my implementation against a set of (popular) known good implementations.
          This was super helpful in finding bugs and edge cases in my implementation, and I highly recommend it to anyone else working on a chip8 emulator.
        </p>
        
        <p className='text-lg'>
          However one of the main issues I encountered was how incredibly slow my implementation was.
          This console's architecture was designed to run at 60Hz, but my implementation ran at about 1Hz.
          After hours of debugging and testing I isolated the issue to two key areas.
          The first of which was my logging system.
          I rather nicely decided to log every instruction that was executed to a file, which was causing a massive slowdown.
          Not only did I log so much unnecessary data, but I also opened and closed the file every time I wrote to it.
          This was a huge mistake and I ended up refactoring the logging system entirely to use a single file stream that was opened once and closed at the end of the program, with much more selective data.
          I want to expand on this more in the future with toggles for logging different types of data, but for now it works well enough.
          I additionally ran into performance issues with the debug window.
          This project was my first time using SDL2 and I decided to redraw the entire window every frame.
          This window contained every single byte of memory loaded into the emulator, as well as all counters and registers.
          This was unbelievably inefficient, especially since the program memory was static for most programs.
          I ended up refactoring the window to only redraw the parts that changed, which made a massive difference in performance.
          I also ended up using a single texture for the entire window, which made it much easier to draw to the screen.
          To highlight the current instruction I ended up using a simple rectangle that would move around the screen, which was much easier than trying to redraw the entire window every frame.
          This massively improved performance and boosted the emulator to around 200hz as of now.
        </p>

        <h1 className="text-3xl md:text-4xl font-bold">Future work</h1>

        <p className='text-lg'>
          I think there is still a lot more potential to optimize my implementation, specifically with my use of vectors rather than arrays, however, I'm more focused on implementing the vendor specific quirks and sound emulation at the moment.
          This project has been really fun so far, especially when I don't have internet on long flights when I can just read through the old manuals and figure out how to do everything myself rather than relying on google for a change.
          This project is far from perfect, and that's okay. I think it's a great learning experience and I hope to continue working on it in the future.
        </p>


        <h1 className="text-3xl md:text-4xl font-bold">Demo</h1>


        <div className="w-full max-w-md md:max-w-2xl">
          <iframe 
            width="100%" 
            height="315" 
            src="https://www.youtube.com/embed/ho07trdLyUI?si=47piuiJh8rfT1CX-" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>



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
          All code for this project is available on my github <Link href="https://github.com/BurntIce16/Chip8Emu"><PopText text='here' color='text-blue-500'></PopText></Link> if you're interested!
        </p>


      </main>
      <Footer />
    </div>
  );
}
