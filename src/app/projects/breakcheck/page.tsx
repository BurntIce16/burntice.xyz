import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from '@/app/components/banner';
import Image from 'next/image';
import LabeledImage from '@/app/components/labeledImage';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Banner imageSrc="/breakcheck/complete.jpg" altText="Breakcheck robot" height={300} verticalPosition={45} />
      <main className="flex-grow flex flex-col items-center pt-12 gap-8 px-4 md:px-8">
        <h1 className="text-4xl font-bold">3D Printed 1Lb Combat Robot - Breakcheck</h1>

        <p className='text-lg'>
          Breakcheck is a 1lb combat robot originally designed to compete in the 2023 WPI Winter Plastic Antweight Tournament.
          The concept for this robot originated from a conversation with a friend where we were arguing the effectiveness and reliability of 3D printed gears in comparison to belts.
          As a firm believer in team gear, I decided to design a robot that would be able to prove the effectiveness of gears in a combat robot.
          Given this, I decided to go for a 4-wheel geared drive robot driven by two center-mounted motors.
        </p>

        <h1 className="text-3xl md:text-4xl font-bold">Revision 1:</h1>

        <LabeledImage label="The original mockup of the motor mount using screws and washers to press and hold the motors in place">
          <Image src={"/breakcheck/old_motor_mount.png"} alt={'The original mockup of the motor mount'} width={400} height={400} className="rounded-xl" />
        </LabeledImage>

        <p className='text-lg'>
          Initially I elected to use cheap components from ali express as a proof of concept, then upgrade if the concept proved itself.
          Given this the first iteration of the robot use N30 gearmotors for drive, a decision that would later come to haunt me.
        </p>


        <LabeledImage label="The first test pod of the drive system">
          <Image src={"/breakcheck/classic_drive.jpg"} alt={''} width={400} height={400} className="rounded-xl" />
        </LabeledImage>

        <p className='text-lg'>
          Since I had decided on proving the reliability of 3d printed gears I decided to design this robot to be more of the defensive side.
          That meant most of my weight and devolvement time was dedicated to designing and reinforcing the robot's structural components.
          After a few days of on-and-off testing, I had my first reliable drive "module".
          The rectangular design of these test pods inspired me to design the rest of the robot similarly, relying on modular components that easily drop in and out for maintenance.
          Eventually, after a few more days I had a completed CAD model of the robot.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Image src={"/breakcheck/old_bot.png"} alt={''} width={400} height={400} className="rounded-xl" />
          <Image src={"/breakcheck/printed_part.png"} alt={''} width={400} height={400} className="rounded-xl" />
        </div>



        <p>
          An interesting quirk of this robot is that I only had a Voron V0 to print with at the time, so every part of the robot had to be designed to fit in its 120mm^3 build volume.
          This resulted in many components being split into multiple parts that would usually be a single piece.
          This was a fun challenge to overcome and I think it resulted in a more interesting, and repairable robot.
        </p>

        <LabeledImage label="Liquid latex drying on the foam wheels the night before the competition">
          <Image src={"/breakcheck/wheels_painting.jpg"} alt={''} width={400} height={400} className="rounded-xl" />
        </LabeledImage>


        <p className='text-lg'>This was the final picture I took at 4 am the night before the competition of my foam wheels with a liquid latex layer drying over them for more adhesion</p>

        <div className="w-full max-w-md sm:max-w-lg">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/2Gp86yKfMOU?si=ZPhl5nMqMsv6VyCy"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <p className='text-lg'>
          Here is breakcheck's first official performance. Not great, but not too shabby for a robots whose total budget summed up to about $30.
          At this point, the concept had been proven and it was time to start revision 2.
        </p>

        <h1 className="text-3xl md:text-4xl font-bold">Revision 2:</h1>

        <p className='text-lg'>
          For this version, I wanted to refine the areas of the robot that had been the most problematic, while keeping what worked.
          Essentially my goal was to spend 90% of my time on 10% of the robot.
          The first thing I wanted to change was the drive system.
          The N30 motors had been a pain to work with and I wanted to upgrade to something more reliable.
          I decided to go with the Repeat Robotics brushed MK2 motors with a 4mm shaft.

          After talking with a friend I also realized that I could harvest brushed ESC's from old vex mc29 controllers.
          By some miracle the esc was almost the exact size as the flat side of the motor which gave me an idea.
        </p>

        <LabeledImage label="The prototype of the new motor backpack">
          <Image src={"/breakcheck/motor_backpack_proto.jpg"} alt={''} width={400} height={400} className="rounded-xl" />
        </LabeledImage>

        <p className='text-lg'>
          After verifying that the dimensions worked with my electrical tape test I cad'ed a simple 3d printed mount which slid over the back of the motor.
          This mounting system worked incredibly and after a few revisions I got it dialed into a clean and reliable fit.
          The nice part of this design is that it could be printed in 5 minutes and assembly was trivial.
          I was able to make 10 of these in a single print, and they were all interchangeable.
          This made it incredibly easy to swap out motors and escs if one or both of them failed.
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Image src={"/breakcheck/backpack_pre_wire.jpg"} alt={''} width={400} height={400} className="rounded-xl" />
          <Image src={"/breakcheck/motor_backpack.jpg"} alt={''} width={400} height={400} className="rounded-xl" />
        </div>


        <p className='text-lg'>
          After some aggressive drive tests, I felt confident in the reliability of the new drive system.
          I then moved on to the next area of the robot that needed improvement, the weapon.
          My previous design not only suffered from lack of speed, only reaching around 100mph, but also a critical lack of bite.
          I decided to try something new and went with a egg beater design, something which was assumed to be silly to implement in 3d printed bots due to their overwhelming energy density and sharp angles.
          To address these concerns I decided to make the weapon significantly less wide and added a dead shaft to support the non motor side of the weapon.
          Unfortunately to account for this reduction in width and additional area taken up by the dead shaft I would have to modify my motor by reducing the length of the shaft.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <LabeledImage label="Please don't do this">
            <Image src={"/breakcheck/modifying_motor.jpg"} alt={''} width={400} height={400} className="rounded-xl" />
          </LabeledImage>

          <LabeledImage label="Motor post cutting and grinding smooth">
            <Image src={"/breakcheck/modified_motor.jpg"} alt={''} width={400} height={400} className="rounded-xl" />
          </LabeledImage>
        </div>


        <p className='text-lg'>
          With my motor and test jig ready to go I gave it an initial spin-up.
          I was able to reach relatively close to the theoretical max speed (within 20mph of 250 according to my tachometer).
          Unfortunately, it wasn't able to survive an impact against an old bot chassis.
          After reviewing the break I came to 2 conclusions, first I needed to change the orientation of the weapon when printing to optimize the directions of the layer lines.
          And secondly, I needed to switch materials, asa wasn't going to cut it for an application so demanding.
          This led me to ask some friends who were also competing and they recommended me overture super pla +.
          This material was magic compared to what I was used to, it was unbelievably easy to print and incredibly durable.
          Following this discovery and some testing I ended up switching all of the parts to this material.
        </p>

        <LabeledImage label="ASA weapon after impact">
          <Image src={"/breakcheck/broken_weapon.jpg"} alt={''} width={400} height={400} className="rounded-xl" />
        </LabeledImage>

        <p className='text-lg'>
          After implementing these changes and some further testing, I decided to reduce the width of the weapon once more to reduce the width of my drive base, and I finally tested a complete bot.
          Shockingly everything worked the same as it had in isolation, and I was able to get a few good hits in on my test bot.
        </p>






        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Image src={"/breakcheck/beauty_shot.jpg"} alt={''} width={400} height={400} className="rounded-xl" />
          <Image src={"/breakcheck/complete.jpg"} alt={''} width={400} height={400} className="rounded-xl" />
        </div>


        <p className='text-lg'>
          This revision has already been through a grudge match at a tournament, however ive identified a number of critical flaws I want to address before open sourcing it like the previous iteration.
          I'm currently abroad in Singapore for the term and have no access to my printer, so I will be unable to make any changes until I return.
          I have plans for a revision 3 which will include a updated weapon bearing stack, and a revamped chassis design, but thats a tale for another day.
          Thanks for reading!
        </p>

        <LabeledImage label="Breakcheck after the grudge match">
          <Image src={"/breakcheck/sadBreakcheck.png"} alt={''} width={400} height={400} className="rounded-xl" />
        </LabeledImage>

      </main>
      <Footer />
    </div>
  );
}
