import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Expertise } from "@/components/Expertise";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Running } from "@/components/Running";
import { SelectedWork } from "@/components/SelectedWork";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SelectedWork />
        <Experience />
        <Expertise />
        <About />
        <Running />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
