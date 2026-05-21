import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import HomeActivities from './components/sections/HomeActivities';
import Experience from './components/sections/Experience';
import WhyAlexandre from './components/sections/WhyAlexandre';
import AboutPreview from './components/sections/AboutPreview';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/layout/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HomeActivities />
      <Experience />
      <WhyAlexandre />
      <AboutPreview />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}