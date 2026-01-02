import Navbar from "@/components/nav/NavBar";
import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import Programs from "@/components/sections/Programs";
import ContactForm from "@/components/sections/FormContact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
      <main>
        <Navbar/>
        <Hero/>
        <AboutUs/>
        <Programs/>
        <ContactForm/>
        <Footer/>
      </main>
  );
}