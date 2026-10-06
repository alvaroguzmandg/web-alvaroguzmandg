import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeV2 } from "@/components/HomeV2";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <HomeV2 />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
