import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Dial from "@/components/SpeedDial";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <div className="fixed top-0 w-full z-10">
          <NavBar />
        </div>
        <main className="mt-[height-of-navbar] flex-1"></main>
        <Dial />
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}
