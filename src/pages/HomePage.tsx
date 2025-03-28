// src/pages/HomePage.tsx
import Hero from '../components/organisms/Hero';
import Services from '../components/ui/Services';
import CaseStudies from '../components/ui/CaseStudies';
import About from '../components/ui/About';
import ContactForm from '../components/ui/ContactForm';
import SEO from '../components/SEO';

const HomePage = () => {
  return (
    <>
      <SEO />
      <section className="section">
        <div className="container">
          <Hero />
        </div>
      </section>
      
      <section className="section bg-muted-navy/5">
        <div className="container">
          <Services />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CaseStudies />
        </div>
      </section>

      <section className="section bg-warm-paper">
        <div className="container">
          <About />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default HomePage;
