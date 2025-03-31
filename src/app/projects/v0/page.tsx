import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from '@/app/components/banner';

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Banner imageSrc="/printer/printer.png" altText="Voron V0 based 3D printer" height={300} verticalPosition={40} />
      <main className="flex-grow flex flex-col items-center pt-12 gap-8 px-4 md:px-8">
        <h1 className="text-4xl font-bold">Custom High Speed 3D Printer</h1>


        <p className='text-lg'>
          Cool stuff coming soon!
        </p>


      </main>
      <Footer />
    </div>
  );
}
