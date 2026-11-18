import { Navbar } from "@/components/Navbar";
import { HeroSession } from "@/components/HeroSession";
import { StatsSection } from "@/components/StatsSection";
import { ArchiveSection } from "@/components/ArchiveSection";
import { CallForSpeakerSection } from "@/components/CallForSpeakerSection";
import { CommunitySection } from "@/components/CommunitySection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSession />
        <StatsSection />
        <ArchiveSection />
        <CallForSpeakerSection />
        <CommunitySection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
