
import { useState } from 'react';
import FloatingParticles from '@/components/FloatingParticles';
import FloatingElements from '@/components/animations/FloatingElements';
import MorphingShape from '@/components/animations/MorphingShape';
import Navigation from '@/components/Navigation';
import LoadingScreen from '@/components/LoadingScreen';
import HeroNikhil from '@/components/HeroNikhil';
import About from '@/components/About';
import TechnicalSkills from '@/components/TechnicalSkills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import ProjectLibrary from '@/components/ProjectLibrary';
import EnhancedBadges from '@/components/EnhancedBadges';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  if (showLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="relative min-h-screen bg-[#1a1a2e]">
      <FloatingParticles />
      <FloatingElements />
      <MorphingShape />
      <Navigation />
      
      <main className="relative z-10">
        <section id="home">
          <HeroNikhil />
        </section>
        
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <TechnicalSkills />
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
          <ProjectLibrary />
        </section>

        <section id="badges">
          <EnhancedBadges />
        </section>

        <section id="timeline">
          <Timeline />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="relative z-10 py-8 text-center border-t border-gray-800 bg-[#16213e]">
        <p className="text-gray-400">
          © 2024 Nikhil Jangid. Crafted with passion and modern tech.
        </p>
      </footer>
    </div>
  );
};

export default Index;
