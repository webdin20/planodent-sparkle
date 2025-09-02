import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Importance from '../components/Importance';
import Benefits from '../components/Benefits';
import Pricing from '../components/Pricing';
import Demo from '../components/Demo';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Importance />
      <Benefits />
      <Pricing />
      <Demo />
      <Testimonials />
      <Partners />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
