import { Briefcase } from 'lucide-react'

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Tech Innovators Inc.',
    period: 'June 2023 - Present',
    description: 'Developing and maintaining web applications using React, Node.js, and MongoDB. Collaborating with the team to implement new features and improve existing ones.',
  },
  {
    title: 'Cybersecurity Research Assistant',
    company: 'University Research Lab',
    period: 'January 2023 - May 2023',
    description: 'Assisted in conducting research on emerging cybersecurity threats and developing mitigation strategies. Contributed to academic papers and presentations.',
  },
  {
    title: 'Web Development Freelancer',
    company: 'Self-employed',
    period: 'September 2022 - December 2022',
    description: 'Designed and developed responsive websites for small businesses and startups. Managed client relationships and delivered projects on time and within budget.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white">
                  <Briefcase />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{exp.period}</p>
                <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

