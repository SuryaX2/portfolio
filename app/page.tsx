import Approach from "@/components/Approach";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center justify-center mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Education />
        <Projects />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
