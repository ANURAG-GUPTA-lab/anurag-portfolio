import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'John Doe',
    position: 'CTO at Tech Innovators Inc.',
    content: 'Anurag is an exceptional developer with a keen eye for detail. His ability to quickly grasp complex concepts and implement innovative solutions is impressive.',
  },
  {
    name: 'Jane Smith',
    position: 'Lead Researcher at University Lab',
    content: 'Working with Anurag was a pleasure. His contributions to our cybersecurity research were invaluable, and his enthusiasm for learning is contagious.',
  },
  {
    name: 'Mike Johnson',
    position: 'Small Business Owner',
    content: 'Anurag delivered a beautiful, responsive website that exceeded our expectations. His communication and project management skills are top-notch.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

