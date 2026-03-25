import Hero         from "@/components/Hero";
import About        from "@/components/About";
import Skills       from "@/components/Skills";
import Activities   from "@/components/Activities";
import Certificates from "@/components/Certificates";
import Marquee      from "@/components/Marquee";
import Contact      from "@/components/Contact";
import Footer       from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Activities />
      <Certificates />
      <Marquee />
      <Contact />
      <Footer />
    </main>
  );
}
