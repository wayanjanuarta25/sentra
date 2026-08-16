import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Tantangan from "@/components/sections/Tantangan";
import Tentang from "@/components/sections/Tentang";
import Program from "@/components/sections/Program";
import Perjalanan from "@/components/sections/Perjalanan";
import AssessmentContainer from "@/components/sections/AssessmentContainer";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Dokumentasi from "@/components/sections/Dokumentasi";
import Impact from "@/components/sections/Impact";
import Contact from "@/components/sections/Contact";

import IntroController from "@/components/animation/IntroController";

export default function Home() {
  return (
    <>
      <Navbar />
      <IntroController>
        <main>
        <Hero />
        <Tantangan />
        <Tentang />
        <Program />
        <Perjalanan />
        <AssessmentContainer />
        <BeforeAfter />
        <Dokumentasi />
        <Impact />
        <Contact />
        </main>
      </IntroController>
      <Footer />
    </>
  );
}
