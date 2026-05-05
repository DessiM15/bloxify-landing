import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Countdown from "@/components/sections/Countdown";
import GameModes from "@/components/sections/GameModes";
import WhyBloxify from "@/components/sections/WhyBloxify";
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
        <Countdown />
        <GameModes />
        <AdventureMode />
        <WhyBloxify />
        <SeasonOne />
        <DailyRewards />
        <Soundtrack />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
