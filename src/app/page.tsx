import Educations from "../components/Educations";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import POW from "../components/POW";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="max-w-2/3 mx-auto flex flex-col items-center">
      <Hero />
      <Experiences />
      <POW />
      <Educations />
      <Skills />
      <Footer />
    </div>
  );
}
