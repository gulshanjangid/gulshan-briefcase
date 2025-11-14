
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Digital Product Developer (Android & iOS)',
      company: 'RAW WorkSpace Solutions PVT LTD',
      location: 'Internship',
      duration: 'Jun, 2025 - Jul, 2025 (2 Months)',
      description: 'As a Digital Product Developer at RAW WorkSpace Solutions PVT LTD, I developed the RAW Coworking Space app - a Flutter project designed to streamline the coworking experience. This app provides a seamless interface for members to manage their workspace, payments, and bookings, while offering a comprehensive dashboard for administrators.',
      technologies: ['Flutter', 'Android', 'iOS', 'Mobile Development', 'Firebase', 'UI/UX Design'],
      type: 'Internship'
    },
    {
      id: 2,
      title: 'Graphic Designer',
      company: 'Media Fourth',
      location: 'Part-time',
      duration: 'Sep, 2024 - Present (9 Months)',
      description: 'As a Part-time Graphic Designer at Media Fourth (2024-Present), I create visual concepts to communicate ideas that inspire, inform, and captivate consumers. My responsibilities include designing logos, website layouts, and market materials.',
      technologies: ['Graphic Design', 'Adobe Creative Suite', 'Logo Design', 'Web Design', 'Marketing Materials'],
      type: 'Part-time'
    },
    {
      id: 3,
      title: 'Front-End Web Developer',
      company: 'Celebal Technologies Pvt Ltd',
      location: 'Internship',
      duration: 'May, 2025 - Present (Less than a month)',
      description: 'As a ReactJs Intern at Celebal Technologies Pvt Ltd (Internship, 2025-Present), I am responsible for developing and implementing user-friendly web interfaces. I utilize ReactJs to build responsive and interactive web applications.',
      technologies: ['ReactJs', 'JavaScript', 'HTML', 'CSS', 'Web Development'],
      type: 'Internship'
    },
    {
      id: 4,
      title: 'Web Developer',
      company: 'Internpe',
      location: 'Internship',
      duration: 'May, 2024 - Aug, 2024 (2 Months)',
      description: 'As a Web Developer Intern at Internpe (Internship, 2024), I was responsible for developing and maintaining web applications. I utilized my skills in front-end and back-end development to create user-friendly interfaces and ensure optimal performance.',
      technologies: ['Web Development', 'Frontend Development', 'Backend Development', 'HTML', 'CSS', 'JavaScript'],
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
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world experience gained through professional roles and internships 
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
