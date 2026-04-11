import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Manifesto } from "@/components/Manifesto";
import { Lookbook } from "@/components/Lookbook";
import { Drop } from "@/components/Drop";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Manifesto />
        <Lookbook />
        <Drop />
      </main>
      <Footer />
    </>
  );
}
