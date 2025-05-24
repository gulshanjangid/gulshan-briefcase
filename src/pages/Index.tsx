
import FloatingParticles from '@/components/FloatingParticles';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <FloatingParticles />
      <Navigation />
      
      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="relative z-10 py-8 text-center border-t border-white/10">
        <p className="text-muted-foreground">
          © 2024 Alex Carter. Crafted with passion and modern tech.
        </p>
      </footer>
    </div>
  );
};

export default Index;
