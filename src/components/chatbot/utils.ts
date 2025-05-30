
export const getBotResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  if (message.includes('skills') || message.includes('technologies')) {
    return "Gulshan is proficient in C++, JavaScript, Python, React.js, Node.js, and many other technologies. He has strong expertise in both frontend and backend development, with particular strength in competitive programming and web development.";
  }
  
  if (message.includes('projects') || message.includes('portfolio')) {
    return "Gulshan has worked on various projects including web applications, algorithms, and competitive programming solutions. You can check out his project library section to see detailed information about his work and achievements.";
  }
  
  if (message.includes('experience') || message.includes('work')) {
    return "Gulshan has experience in software development, competitive programming, and web development. He has participated in various coding competitions and built multiple projects showcasing his technical skills.";
  }
  
  if (message.includes('education') || message.includes('study')) {
    return "Gulshan has a strong educational background in computer science and has earned various certifications in programming and web development technologies.";
  }
  
  if (message.includes('contact') || message.includes('reach')) {
    return "You can contact Gulshan through the contact section at the bottom of this page. Feel free to reach out for collaborations, job opportunities, or any technical discussions!";
  }
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Hello! Great to meet you! I'm here to help you learn more about Gulshan Jangid. Feel free to ask about his skills, projects, experience, or anything else you'd like to know!";
  }
  
  if (message.includes('thank') || message.includes('thanks')) {
    return "You're welcome! Is there anything else you'd like to know about Gulshan's background, skills, or projects?";
  }
  
  return "That's an interesting question! I can help you learn about Gulshan's skills, projects, experience, education, or how to contact him. What would you like to know more about?";
};
