import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import AI from "./components/AI";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <AI />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}