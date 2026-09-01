import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FarmLandscape from "./components/FarmLandscape";
import WhatWeGrow from "./components/WhatWeGrow";
import FeaturedCrop from "./components/FeaturedCrop";
import FarmLife from "./components/FarmLife";
import FarmStructure from "./components/FarmStructure";
import NightMoment from "./components/NightMoment";
import Livestock from "./components/Livestock";
import GoatHistory from "./components/GoatHistory";
import Gallery from "./components/Gallery";
import Seasons from "./components/Seasons";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FarmLandscape />
        <WhatWeGrow />
        <FeaturedCrop />
        <FarmLife />
        <FarmStructure />
        <NightMoment />
        <Livestock />
        <GoatHistory />
        <Gallery />
        <Seasons />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
