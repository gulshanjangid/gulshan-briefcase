import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'B Tech (CSE) + Minor in Print Media Design and Production',
      institution: 'Amity University, Rajasthan',
      location: 'Jaipur, Rajasthan',
      duration: '2022 - 2026',
      gpa: '7.56 CGPA',
      description: 'Pursuing Bachelor of Technology in Computer Science and Engineering with a minor degree in Print Media Design and Production. Focused on software development, algorithms, modern programming paradigms, and media design principles.',
      coursework: ['Data Structures & Algorithms', 'Software Engineering', 'Database Management Systems', 'Web Development', 'Computer Networks', 'Object Oriented Programming', 'Print Media Design', 'Media Production'],
      achievements: ['Active participation in coding competitions', 'Tech society member', 'Project development and innovation']
    },
    {
      id: 2,
      degree: '12th Standard',
      institution: 'Krishna Vidya Mandir, Alwar',
      location: 'Alwar, Rajasthan',
      duration: '2020 - 2022',
      gpa: '88.87%',
      description: 'Completed senior secondary education with excellent performance in Science stream, building a strong foundation for engineering studies.',
      coursework: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science', 'English'],
      achievements: ['Outstanding academic performance', 'Science stream topper', 'Active in extracurricular activities']
    },
    {
      id: 3,
      degree: '10th Standard',
      institution: 'Krishna Vidya Mandir, Alwar',
      location: 'Alwar, Rajasthan',
      duration: '2018 - 2020',
      gpa: '67.87%',
      description: 'Completed secondary education with good academic performance, developing foundational knowledge across various subjects.',
      coursework: ['Mathematics', 'Science', 'Social Studies', 'English', 'Hindi'],
      achievements: ['Consistent academic progress', 'Participation in school competitions', 'Well-rounded development']
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
            Educational Qualification
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation and achievements that built the cornerstone 
            of my technical knowledge and problem-solving abilities.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-white/10 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                        <GraduationCap className="h-6 w-6 text-primary" />
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-secondary mt-1">
                        {edu.institution} • {edu.location}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {edu.duration}
                      </div>
                      {edu.gpa && (
                        <span className="px-3 py-1 text-xs font-medium bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
                          {edu.gpa}
                        </span>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-secondary" />
                      Key Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full border border-secondary/20"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
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

export default Education;
