import Navbar from "@/components/nav/NavBar";
import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import Programs from "@/components/sections/Programs";

export default function Home() {
  return (
      <main>
        <Navbar/>
        <Hero/>
        <AboutUs/>
        <Programs/>
        <div className="h-[200vh]"> {}
        </div>
      </main>
  );
}