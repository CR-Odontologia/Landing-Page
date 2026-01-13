import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import PastEditions from "@/components/sections/PastEditions";
import Contact from "@/components/sections/Contact";

export const metadata = {
    title: "CR Formación Especializada | Especialización y Postgrado Odontológico | CR Odontologia",
    description: "Líderes en formación odontológica con certificación internacional FACOP. Diplomados y cursos especializados.",
};

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