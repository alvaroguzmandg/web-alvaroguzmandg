import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Arredo } from "@/components/Arredo";
import { Expertise } from "@/components/Expertise";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Running } from "@/components/Running";
import { SelectedWork } from "@/components/SelectedWork";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal><Expertise /></Reveal>
        <Reveal><Arredo /></Reveal>
        <Reveal><SelectedWork /></Reveal>
        <Reveal><Running /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </>
  );
}
