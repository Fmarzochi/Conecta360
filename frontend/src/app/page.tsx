import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Mission from '@/components/sections/Mission';
import Values from '@/components/sections/Values';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Header />

      <div className="pt-20 w-full">
        <Hero />
        <About />
        <Services />
        <Mission />
        <Values />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}