
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full-Stack Development Intern',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      duration: 'Jun 2023 - Aug 2023',
      description: 'Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with senior developers on feature implementation and bug fixes.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Git'],
      type: 'Internship'
    },
    {
      id: 2,
      title: 'Frontend Developer Trainee',
      company: 'Digital Innovation Lab',
      location: 'New York, NY',
      duration: 'Jan 2023 - May 2023',
      description: 'Intensive training program focused on modern frontend technologies. Built responsive web applications and learned best practices in UI/UX design.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Jest'],
      type: 'Training'
    },
    {
      id: 3,
      title: 'Software Development Intern',
      company: 'StartupHub Inc.',
      location: 'Austin, TX',
      duration: 'Sep 2022 - Dec 2022',
      description: 'Contributed to the development of a mobile-first web application. Gained experience in agile development methodologies and code review processes.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
      type: 'Internship'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Internship & Training Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world experience gained through internships and specialized training programs 
            that shaped my professional development journey.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-white/10 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                        <Briefcase className="h-6 w-6 text-primary" />
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-secondary mt-1">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        exp.type === 'Internship' 
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                          : 'bg-green-500/10 text-green-400 border border-green-500/20'
                      }`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
