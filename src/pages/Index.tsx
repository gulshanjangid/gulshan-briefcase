import FloatingParticles from '@/components/FloatingParticles';
import FloatingElements from '@/components/animations/FloatingElements';
import MorphingShape from '@/components/animations/MorphingShape';
import Navigation from '@/components/Navigation';
import Hero3D from '@/components/Hero3D';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <FloatingParticles />
      <FloatingElements />
      <MorphingShape />
      <Navigation />
      
      <main className="relative z-10">
        <section id="hero">
          <Hero3D />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="certifications">
          <Certifications />
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
