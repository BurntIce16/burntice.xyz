import Header from "../components/header";
import Footer from "../components/footer";

export default function ResumePage() {
  return (
    <div>
      <Header />
      <div className="flex justify-center p-4">
        <iframe
          src="/resume.pdf"
          className="w-[95%] h-screen mx-auto"
        />
      </div>
      <Footer />
    </div>
  );
}