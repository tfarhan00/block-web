import Image from "next/image";
import SvgIcon from "../_components/utils/SvgIcon";
import { cnm } from "@/utils/style";
import HowToWork from "../_components/home/HowToWork";
import { LenisProvider } from "../_providers/LenisProvider";
import Perks from "../_components/home/Perks/Perks";
import Navbar from "../_components/home/Navbar/Navbar";
import Hero from "../_components/home/Hero";
import AboutUs from "../_components/home/AboutUs";
import Listed from "../_components/home/Listed";
import Benefit from "../_components/home/Benefit";
import LocationAndJoin from "../_components/home/LocationAndJoin";
import Footer from "../_components/home/Footer";

export default function Home() {
  return (
    <>
      <LenisProvider />
      <main className="pb-20">
        <Navbar />

        <Hero />

        <AboutUs />

        <Listed />

        <Benefit />

        <HowToWork />

        <Perks />

        <LocationAndJoin />

        <Footer />
      </main>
    </>
  );
}
