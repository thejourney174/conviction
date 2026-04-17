import { Header } from "@/components/Header";
import { Lookbook } from "@/components/Lookbook";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Lookbook — CONVICTION",
  description: "Vol. 01 — Built for the long game. Heavyweight cotton. Considered cuts. Made in small runs.",
};

export default function LookbookPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <Lookbook />
      </main>
      <Footer />
    </>
  );
}
