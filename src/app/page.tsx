import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Solutions } from "@/components/Solutions";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Cases } from "@/components/Cases";
import { Testimonials } from "@/components/Testimonials";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <About />
        <Process />
        <Cases />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
