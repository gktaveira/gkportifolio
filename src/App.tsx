import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SpecialtiesBanner from './components/SpecialtiesBanner';
import About from './components/About';
import Specialties from './components/Specialties';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import ClosingSection from './components/ClosingSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ backgroundColor: '#0A0E14', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <SpecialtiesBanner />
        <About />
        <Specialties />
        <Portfolio />
        <Process />
        <Contact />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
}
