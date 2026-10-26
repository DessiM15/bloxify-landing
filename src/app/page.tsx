import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import MarqueeBar from "@/components/ui/MarqueeBar";
import LiveNow from "@/components/sections/LiveNow";
import GameModes from "@/components/sections/GameModes";
import AdventureMode from "@/components/sections/AdventureMode";
import Gallery from "@/components/sections/Gallery";
import MakeItYours from "@/components/sections/MakeItYours";
import DailyRewards from "@/components/sections/DailyRewards";
import Soundtrack from "@/components/sections/Soundtrack";
import DownloadCTA from "@/components/sections/DownloadCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeBar />
        <LiveNow />
        <GameModes />
        <AdventureMode />
        <Gallery />
        <MarqueeBar />
        <MakeItYours />
        <DailyRewards />
        <Soundtrack />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
