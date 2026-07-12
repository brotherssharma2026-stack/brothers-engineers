import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import WhyChooseUs from "../components/WhyChooseUs";
import OurStory from "../components/OurStory";
import Whatsapp from "../components/Whatsapp";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <WhyChooseUs />
      <About />
      <OurStory />
      <Services />
      <Projects />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <Whatsapp />
    </>
  );
}