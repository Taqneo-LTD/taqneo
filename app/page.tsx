import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import WhyUs from "@/components/why-us";
import Portfolio from "@/components/portfolio";
import Process from "@/components/process";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-16" />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Services />
        <WhyUs />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
