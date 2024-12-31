import { Twitter, GitlabIcon as GitHub, Linkedin, Instagram, Youtube, Facebook, Mail } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/anuraggupta' },
    { icon: GitHub, href: 'https://github.com/anuraggupta' },
    { icon: Linkedin, href: 'https://linkedin.com/in/anuraggupta' },
    { icon: Instagram, href: 'https://instagram.com/anuraggupta' },
    { icon: Youtube, href: 'https://youtube.com/anuraggupta' },
    { icon: Facebook, href: 'https://facebook.com/anuraggupta' },
    { icon: Mail, href: 'mailto:anurag.gupta@gmail.com' },
  ]

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <p className="text-center text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} All rights reserved. Anurag Gupta
        </p>
      </div>
    </footer>
  )
}

