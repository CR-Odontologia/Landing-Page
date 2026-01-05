import Navbar from "@/components/nav/NavBar";
import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import Footer from "@/components/sections/Footer";
import PastEditions from "@/components/sections/PastEditions";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
      <main>
        <Hero/>
        <AboutUs/>
        <PastEditions/>
        <Contact/>
      </main>
  );
}