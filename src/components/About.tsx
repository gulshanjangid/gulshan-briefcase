
import { motion } from 'framer-motion';
import Card3D from './animations/Card3D';
import ParallaxText from './animations/ParallaxText';
import ComputerCanvas from './animations/ComputerCanvas';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', level: 85, color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', level: 80, color: 'from-green-400 to-green-600' },
    { name: 'Python', level: 75, color: 'from-purple-400 to-purple-600' },
    { name: 'MongoDB', level: 70, color: 'from-green-500 to-green-700' },
    { name: 'Git/Github', level: 85, color: 'from-gray-400 to-gray-600' },
    { name: 'Wordpress Developer', level: 80, color: 'from-blue-500 to-blue-700' },
    { name: 'Graphic Designing', level: 75, color: 'from-pink-400 to-pink-600' }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <ParallaxText speed={0.3} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate full-stack developer crafting digital experiences with modern technologies
            </p>
          </motion.div>
        </ParallaxText>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card3D intensity={15}>
              <div className="glass rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a dedicated Computer Science student and full-stack developer, I'm passionate about creating 
                  innovative solutions that bridge the gap between complex technical challenges and user-friendly experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My expertise spans from AI-powered applications to modern web development, with a focus on 
                  creating scalable, efficient, and aesthetically pleasing digital solutions.
                </p>
              </div>
            </Card3D>

            <Card3D intensity={10}>
              <div className="glass rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold mb-4 text-secondary">Quick Facts</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>🎓 Computer Science Student</li>
                  <li>💻 Full-Stack Developer</li>
                  <li>🤖 AI Enthusiast</li>
                  <li>🎨 UI/UX Designer</li>
                </ul>
              </div>
            </Card3D>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <ComputerCanvas />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card3D intensity={12}>
                <div className="glass rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Technical Skills</h3>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card3D>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
