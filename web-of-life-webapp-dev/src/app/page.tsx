import Navbar from "./components/navbar";
import VideoBackground from "./components/VideoBackground";
import CollectionSection from "./components/collections";
import MirrorsSection from "./components/mirrors";
import SeatersSection from "./components/seaters";
import VasesSection from "./components/vases";
import LampsSection from "./components/lamps";
import Review from "./components/reviews";
import { CustomerFooter } from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="relative w-full ">
        <Navbar />
        <VideoBackground />
        {/* Optionally, hero content here */}
      </div>
      {/* The rest of your page content below */}
      <CollectionSection />
      <MirrorsSection />
      <SeatersSection />
      <VasesSection />
      <LampsSection />
      <Review />
      <CustomerFooter />
    </div>
  );
}
