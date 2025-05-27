
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React / Next.js', level: 95, color: 'from-blue-500 to-cyan-400' },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-400' },
    { name: 'Python', level: 80, color: 'from-yellow-500 to-orange-400' },
    { name: 'Git/Github', level: 85, color: 'from-gray-500 to-gray-400' },
    { name: 'Wordpress Developer', level: 75, color: 'from-blue-500 to-blue-600' },
    { name: 'Graphic Designing', level: 70, color: 'from-purple-500 to-pink-400' },
    { name: 'UI/UX Design', level: 70, color: 'from-purple-500 to-pink-400' },
  ];

  useEffect(() => {
    if (skillsRef.current) {
      const skillBars = skillsRef.current.querySelectorAll('.skill-bar');
      
      gsap.fromTo(skillBars, 
        { width: '0%' },
        {
          width: (index, target) => target.dataset.level + '%',
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 5+ years of experience creating 
            digital solutions that blend creativity with functionality. My journey spans 
            from building scalable web applications to crafting intuitive user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Started as a curious computer science student, evolved into a full-stack developer 
                who loves turning complex problems into simple, beautiful solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                "Code is poetry, and every line should tell a story. I believe in writing 
                clean, maintainable code that not only works but inspires."
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={skillsRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`skill-bar h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                    data-level={skill.level}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
