import Footer from './components/layout/Footer';
import AboutPreview from './components/sections/AboutPreview';
import Experience from './components/sections/Experience';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';
import Hero from './components/sections/Hero';
import HomeActivities from './components/sections/HomeActivities';
import TrustBar from './components/sections/TrustBar';
import WhyAlexandre from './components/sections/WhyAlexandre';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
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