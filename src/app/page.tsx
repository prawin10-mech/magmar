import React from "react";
import Hero from "./features/hero";
import Offers from "./features/offers";
import Feature from "./features/feature";
import Counter from "./features/counter";
import Wallet from "./features/wallet";
import Network from "./features/network";
import Portfolio from "./features/portfolio";
import Footer from "./features/footer";
import Navbar from "./features/navbar";
import { Toaster } from "sonner";
import DemoPreview from "./features/demo";
import TeamSection from "./features/team";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Toaster position="top-right" />

      <Navbar />
      <Hero />
      <div className="relative max-w-[1440px] mx-auto">
        <Network />
        <Offers />
      </div>
      <DemoPreview />
      <div className="relative max-w-[1440px] mx-auto">
        <Counter />
        <Feature />
        <TeamSection/>
        <Wallet />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}


// import Hero from "./components/Hero";
// import PartnersMarquee from "./components/PartnersMarquee";
// import FeaturesSection from "./components/FeaturesSection";
// import Testimonials from "./components/Testimonials";
// import TransactionDetails from "./components/TransactionDetails";
// import TeamMembers from "./components/TeamMembers";
// import ChainMarquee from "./components/ChainMarquee";
// import TrackPortfolo from "./components/TrackPortfolio";
// import Footer from "./components/Footer";
// import FeaturesList from "./components/FeaturesList";


// export default function Home() {



//   return (
//     <main className="relative min-h-screen">
//       <Toaster position="top-right" />

//       <Hero />
//       <div className="relative max-w-[1440px] mx-auto">
//         <PartnersMarquee />
//         <FeaturesSection />
//       </div>
//       <Testimonials />
//       <TransactionDetails />
//       <FeaturesList />
//       <TeamMembers />
//       <ChainMarquee />
//       <TrackPortfolo />
//       <Footer />
//     </main>
//   );
// }
