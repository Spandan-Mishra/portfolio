import Education from "../components/Education";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import POW from "../components/POW";

export default function Home() {
  return (
    <div className="max-w-2/3 mx-auto flex flex-col items-center">
      <Hero />
      <Experience />
      <POW />
      <Education />
    </div>
  );
}
