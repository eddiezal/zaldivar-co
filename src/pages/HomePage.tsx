// src/pages/HomePage.tsx
import Hero from '../components/ui/Hero';
import Services from '../components/ui/Services';
import CaseStudies from '../components/ui/CaseStudies';
import About from '../components/ui/About';
import ContactForm from '../components/ui/ContactForm';
import SEO from '../components/SEO';

const HomePage = () => {
  return (
    <>
      <SEO />
      <Hero />
      <Services />
      <CaseStudies />
      <About />
      <ContactForm />
    </>
  );
};

export default HomePage;