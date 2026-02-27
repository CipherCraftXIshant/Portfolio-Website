const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock Data
const portfolioData = {
  about: {
    name: "Cipher Xishant",
    title: "Full Stack Developer & Designer",
    description: "I build responsive, modern, and accessible web experiences. I love creating beautiful UIs and robust backend architectures."
  },
  skills: [
    { category: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Vite"] },
    { category: "Backend & Core", items: ["Node.js", "Express.js", "MongoDB", "SQL", "Java", "Python", "C"] },
    { category: "Tools", items: ["Git", "GitHub", "Postman", "Figma", "Docker", "VS Code"] }
  ],
  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured modern e-commerce platform with cart and checkout functionalities.",
      techStack: ["React", "Express", "Node.js", "MongoDB", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task tracking tool built for productivity with real-time updates.",
      techStack: ["React", "Firebase", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "AI Chat Interface",
      description: "A sleek interface for interacting with large language models seamlessly.",
      techStack: ["React", "Tailwind", "OpenAI API"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ]
};

// Routes
app.get('/api/portfolio', (req, res) => {
  res.json({ success: true, data: portfolioData });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Please provide all required fields." });
  }

  // Here we would typically send an email or save to DB.
  // For this mock, we just return success.
  console.log(`Contact message received from ${name} (${email}): ${message}`);

  res.status(200).json({ success: true, message: "Thank you for reaching out! I'll get back to you soon." });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
