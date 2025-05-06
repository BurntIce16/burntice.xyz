import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from '@/app/components/banner';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Banner imageSrc="/qrCode/qrCode.png" altText="Shy QR Code Header" height={300} verticalPosition={40} />

      <main className="flex-grow flex flex-col items-center pt-12 gap-8 px-4 md:px-8">
        <h1 className="text-4xl font-bold">Shy QR Code Art Project</h1>

        <p className='text-lg'>
          This project was created as the final submission for my digital interactive art course, which I took as part of my humanities track. Through this project, I touched on many different topics, including basic electronics, 3D printing, embedded programming, computer vision using OpenCV, and art. Some aspects of this project are rough around the edges however, it was constructed over three days during finals, so cut me some slack.
        </p>

        <p className='text-lg'>
          Although the writeup for this project is still a work in progress, however, I still thought it was worth sharing its video here.
        </p>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/umgAs034_ro?si=3s3cZe7BGksCamd6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      </main>
      <Footer />
    </div>
  );
}
