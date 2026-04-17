import { Header } from "@/components/Header";
import { Manifesto } from "@/components/Manifesto";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Manifesto — CONVICTION",
  description: "We don't make clothes for spectators. We make armor for the ones who decide.",
};

export default function ManifestoPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <Manifesto />
      </main>
      <Footer />
    </>
  );
}
