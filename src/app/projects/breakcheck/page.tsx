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
          Breakcheck is a 1lb combat robot origonally designed to compete in the 2023 WPI Winter Plastic Antweight Tornament.
          The concept for this robot origonanited from a connversation with a friend where we were arguing the effectiveness and reliability of 3D printed gears in comparison to belts.
          As a firm believer of team gear I decided to design a robot that would be able to prove the effectiveness of gears in a combat robot.
          Given this I decided to go for a 4 wheel geared drive robot driven by two center mounted motors.
        </p>

        <h1 className="text-3xl md:text-4xl font-bold">Revision 1:</h1>

        <LabeledImage label="The origonal mockup of the motor mount using screws and washers to press and hold the motors in place">
          <Image src={"/breakcheck/old_motor_mount.png"} alt={'The origonal mockup of the motor mount'} width={400} height={400} className="rounded-xl" />
        </LabeledImage>

        <p className='text-lg'>
          Initially I ellected to use cheap components from ali express as a proof of concept, then upgrade if the concept proved itself.
          Given this the first itteration of the robot use N30 gearmotors for drive, a decision that would later come to haunt me.
        </p>


        <LabeledImage label="The first test pod of the drive system">
          <Image src={"/breakcheck/classic_drive.jpg"} alt={''} width={400} height={400} className="rounded-xl"/>
        </LabeledImage>

        <p className='text-lg'>
          Since I had decided on proving the reliability of 3d printed gears I decided to design this robot to be more of the defensive side.
          That meaning most of my weight and devolpement time was dedicated towards designing and reinforcing the robots structural components.
          After a few days of on and off testing I had my first reliable drive "module".
          The rectangular design of these test pods inspired me to design the rest of the robot in a similar fashion, relying on modular components that easily drop in and out for mantinence.
          Eventually after a few more days I has a completed cad model of the robot.
        </p>


        <Image src={"/breakcheck/old_bot.png"} alt={''} width={400} height={400} className="rounded-xl"/>

        <Image src={"/breakcheck/printed_part.png"} alt={''} width={400} height={400} className="rounded-xl"/>

        <p>
          An interesting quirk of this robot is that I only had a voron V0 to print with at the time, so every part of the robot had to be designed to fit in its 120mm^3 build volume.
          This resulted in many components being split into multiple parts that would usually be a single piece.
          This was a fun challenge to overcome and I think it resulted in a more interesting, and repairable robot.
        </p>


        <Image src={"/breakcheck/wheels_painting.jpg"} alt={''} width={400} height={400} className="rounded-xl"/>

        <p className='text-lg'>This was the final picture I took at 4am the night before the competition of my foam wheels with a liquid latex layer drying over them for more adhesion</p>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/2Gp86yKfMOU?si=ZPhl5nMqMsv6VyCy" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <p className='text-lg'>
          Here is breakchecks first official performance. Not great, but not too shabby for a robots whos total budget summed up to about $30.
          At this point the concept had been proven and it was time to start revision 2.
        </p>

        <h2>Revision 2:</h2>


        <Image src={"/breakcheck/motor_backpack_proto.jpg"} alt={''} width={400} height={400} className="rounded-xl"/>

        <Image src={"/breakcheck/backpack_pre_wire.jpg"} alt={''} width={400} height={400} className="rounded-xl"/>

        <Image src={"/breakcheck/motor_backpack.jpg"} alt={''} width={400} height={400} className="rounded-xl"/>

        <Image src={"/breakcheck/modifying_motor.jpg"} alt={''} width={400} height={400} className="rounded-xl"/>

        <Image src={"/breakcheck/modified_motor.jpg"} alt={''} width={400} height={400} className="rounded-xl"/>

        <Image src={"/breakcheck/broken_weapon.jpg"} alt={''} width={400} height={400} className="rounded-xl"/>

        <Image src={"/breakcheck/beauty_shot.jpg"} alt={''} width={400} height={400} className="rounded-xl"/>

        <Image src={"/breakcheck/complete.jpg"} alt={''} width={400} height={400} className="rounded-xl"/>

        <p className='text-lg'>
          This seccond revision of breakcheck has yet to compete in an offical tournament and I have a lot of work to do before it is ready.
          Howver its a much more refined design that I am much more proud of.
          Every element of it has been improved upon from the first revision and I am excited to see how it performs in the future.
        </p>

      </main>
      <Footer />
    </div>
  );
}
