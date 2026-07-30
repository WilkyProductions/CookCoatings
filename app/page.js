import Header from "@/components/Header";
import MobileActionBar from "@/components/MobileActionBar";
import Hero from "@/components/Hero";
import WhySprayFoam from "@/components/WhySprayFoam";
import Services from "@/components/Services";
import Maintenance from "@/components/Maintenance";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <Header />
      <MobileActionBar />
      <a id="top"></a>
      <Hero />
      <WhySprayFoam />
      <Services />
      <Maintenance />
      <About />
      <Clients />
      <Projects />
      <FAQ />
      <ContactCTA />
      <Footer />
      <ScrollReveal />
    </>
  );
}
