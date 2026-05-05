import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Countdown from "@/components/sections/Countdown";
import GameModes from "@/components/sections/GameModes";
import MakeItYours from "@/components/sections/MakeItYours";
import MarqueeBar from "@/components/ui/MarqueeBar";
import AdventureMode from "@/components/sections/AdventureMode";
import SeasonOne from "@/components/sections/SeasonOne";
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
        <Countdown />
        <GameModes />
        <AdventureMode />
        <MarqueeBar />
        <MakeItYours />
        <SeasonOne />
        <DailyRewards />
        <Soundtrack />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
