import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from '@/app/components/banner';
import Image from 'next/image';
import LabeledImage from '@/app/components/labeledImage';
import Link from 'next/link';
import PopText from '@/app/components/popText';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Banner imageSrc="/marble/completeNoDec.png" altText="Marble Run Header" height={300} verticalPosition={40} />

      <main className="flex-grow flex flex-col items-center pt-12 gap-8 px-4 md:px-8">
        <h1 className="text-4xl font-bold">Marble Run Kinetic Sculpture</h1>

        <p className='text-lg'>
          For my humanities track at WPI I decided to take a unique approach to my "depth" component.
          Each student has to focus on an aspect of their humanities track and take several courses in relation to it.
          For some this is fairly general such as history, literature, or art.
          I decided to take a more hands on approach and focus on the intersection of art and engineering.
          Given this I decided to build a kinetic sculpture that would be able to move and interact with its environment.
          This project was done during my junior year C term in collaboration with my good friend <Link href="https://www.linkedin.com/in/sage-ugras-bb1275241/"><PopText text='Sage Ugras' color='text-purple-500'></PopText></Link>
        </p>

        <p className='text-lg'>
          The first decision we made before any design took place was material selection.
          We wanted the run to have a consistent style throughout the entire sculpture.
          We also wanted to prioritize aesthetics over ease of manufacturing.
          This led us to choose an entirely bent and soldered 14 gauge steel wire design.
          Everything except the lift motor and mount was entirely made out of this wire, which was a fun challenge to overcome.
        </p>


        <LabeledImage label="Miniature prototype run build to test the concept of the marble run and the jigs we designed/printed">
          <Image src={"/marble/miniRun.png"} alt={'First "test run" of the marble run'} width={400} height={400} className="rounded-xl" />
        </LabeledImage>

        <p className='text-lg'>
          Before embarking on the final project we decided to make a miniature prototype of the marble run to test the concept and the jigs we designed/printed.
          This was a great way to test the concept and make sure we were on the right track before we started assembling the full size version.
          Once we were happy with the design we started to work on the lift for the full size version.
          This ended up being one of the biggest challenges of the project.
          The spacing accuracy needed to make the lift reliable ended up being much more than we expected.
          We ended up having to make several iterations of the lift before we realized that we needed to make a custom jig for spacing the coil an "exact" distance from the center support column.
          This was a surprise to us since we did some research on similar runs and no one else encountered this issue.
          Our theory is that the steel wire we were using had a much higher spring coefficient to it than the more popular copper runs.
          This in turn made the metal bend back from its bent position making it harder to bend accurately.
        </p>

        <p className='text-lg'>
          For the lift motor itself we ended up using a cheap n20 gear motor we had from a previous project and directly wired it up to a power supply for testing.
          This motor was then connected to a small 3d printed shaft that used friction to attach to the wire lift.
          This did allow slipping on the lift, but this only occurred in situation which would otherwise cause damage to the run so it worked out in our favor.
          In the future if this lift was to run continuously a set screw or adhesive could easily be added.
        </p>


        <LabeledImage label="First coil lift prototype">
          <Image src={"/marble/testLift.png"} alt={'First coil lift prototype'} width={400} height={400} className="rounded-xl" />
        </LabeledImage>


        <p className='text-lg'>
          While working on the lift we happened across an old table which was going to be thrown out.
          We ended up taking it (with permission) and refinished it to math the "maker desk" aesthetic we were going for.
          Since the desk was mdf it made it really easy to drill out holes for the supports without needing to use an electric drill, making it easier to add last minute support in small hard to reach area of the run.
        </p>


        <LabeledImage label="Recycled table after sanding and a first layer of stain">
          <Image src={"/marble/tableTop.png"} alt={'Recycled table after sanding and a first layer of stain'} width={400} height={400} className="rounded-xl" />
        </LabeledImage>


        <p className='text-lg'>
          Once the lift was working we started to work on the rest of the run.
          We first mounted the lift in the center of the run then added additional track segments from top to bottom.
          One of the first and most difficult segments we added was the "loop de loop".
          This was a fun challenge to overcome since we had to make sure the marble would not fly out of the track past the loop while still maintaining enough momentum  able to go through the loop.
          At this point it was "smooth sailing" just adding segments and testing them as we went.
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Image src={"/marble/inProgress.png"} alt={'Marble run under construction'} width={400} height={400} className="rounded-xl" />
          <Image src={"/marble/almostDone.png"} alt={'Marble run under construction'} width={400} height={400} className="rounded-xl" />
          <Image src={"/marble/sideFront.png"} alt={'Marble run under construction'} width={400} height={400} className="rounded-xl" />
          <Image src={"/marble/sideHalfDone.png"} alt={'Marble run under construction'} width={400} height={400} className="rounded-xl" />
        </div>


        <p className='text-lg'>
          Once we got to the final few segments we looped the track back around to the lift, completing the loop at last.
          The next few days were spent running the run and making small adjustments to the track to make sure the marble would not get stuck or fly off.
          This required a number of small changes to the supports and track segments such as adding retaining walls to the some tighter turns.  
        </p>



        <LabeledImage label="Complete run with the lift and track segments">
          <Image src={"/marble/completeNoDec.png"} alt={'Completed marble run'} width={400} height={400} className="rounded-xl" />
        </LabeledImage>


        <p className='text-lg'>
          Unfortunately before we got a chance to demo the run to out professor it was damaged slightly overnight by someone in the lab.
          The run was mostly okay, but some of the turns got bent out of alignment causing some of the marbles to drop.
          We plan to add an acrylic case around the run in the near future, improving its reliability and ability to be displayed.   
        </p>


        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
          <iframe 
            width="100%" 
            height="315" 
            src="https://www.youtube-nocookie.com/embed/VmM33rR752I?si=vNuTR2i0kXxYQi-T" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>


        <p className='text-lg'>
          This project was a really fun departure from my normal work and expanded my thinking and understanding of non traditional manufacturing.
          I hope to have the opportunity to work on projects involving metal bending again in the near future.
        </p>

      </main>
      <Footer />
    </div>
  );
}
