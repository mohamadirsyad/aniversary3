import MusicPlayer from "./components/MusicPlayer";
import Hero from "./components/Hero";
import Gift from "./components/Gift";
import LoveLetter from "./components/LoveLetter";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import OpeningIntro from "./components/OpeningIntro";
import ClosingMessage from "./components/ClosingMessage";
import Harapan from "./components/Harapan";
export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <MusicPlayer />
      <Hero />
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-16">
        <OpeningIntro />
        <LoveLetter />
        <Gift />
        <Gallery />
        <ClosingMessage />
        <Harapan />
      </main>
      <Footer />
    </div>
  );
}
