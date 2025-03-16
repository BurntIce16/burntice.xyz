import Header from '../../components/header';
import Footer from '../../components/footer';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center pt-32 gap-8">
        <h1 className="text-4xl font-bold">Marble Run Kinetic Sculpture</h1>
      </main>
      <Footer />
    </div>
  );
}
