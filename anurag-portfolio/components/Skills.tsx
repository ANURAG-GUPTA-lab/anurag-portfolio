import { Code, Shield, Server, Database, Globe, Terminal } from 'lucide-react'

const skills = [
  { name: 'Full Stack Development', icon: Code, description: 'Proficient in building end-to-end web applications using modern technologies.' },
  { name: 'Cybersecurity', icon: Shield, description: 'Knowledgeable in securing web applications and understanding potential vulnerabilities.' },
  { name: 'Backend Development', icon: Server, description: 'Experienced in creating robust server-side applications and APIs.' },
  { name: 'Database Management', icon: Database, description: 'Skilled in designing and optimizing database structures for efficient data storage and retrieval.' },
  { name: 'Web Performance', icon: Globe, description: 'Focused on optimizing web applications for speed and efficiency across various devices and networks.' },
  { name: 'DevOps', icon: Terminal, description: 'Familiar with CI/CD pipelines, containerization, and cloud deployment strategies.' },
]

const techStack = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'Python', 'Django',
  'MongoDB', 'PostgreSQL', 'GraphQL', 'Docker', 'Kubernetes', 'AWS', 'Git', 'CI/CD'
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <skill.icon className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{skill.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

