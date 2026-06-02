import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
