import Navbar from "@/components/nav/NavBar";
import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";

export default function Home() {
  return (
      <main>
        <Navbar/>
        <Hero/>
        <AboutUs/>
        <div className="h-[200vh]"> {}
        </div>
      </main>
  );
}