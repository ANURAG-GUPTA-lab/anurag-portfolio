'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-800 dark:text-white">AG</span>
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">About</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Skills</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Projects</a>
            <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Experience</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Contact</a>
          </div>
          <div className="flex items-center">
            <button onClick={() => setDarkMode(!darkMode)} className="focus:outline-none mr-4">
              {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-600" />}
            </button>
            <button onClick={toggleMenu} className="md:hidden focus:outline-none">
              {isMenuOpen ? <X className="text-gray-600 dark:text-gray-300" /> : <Menu className="text-gray-600 dark:text-gray-300" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <a href="#about" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white" onClick={toggleMenu}>About</a>
            <a href="#skills" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white" onClick={toggleMenu}>Skills</a>
            <a href="#projects" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white" onClick={toggleMenu}>Projects</a>
            <a href="#experience" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white" onClick={toggleMenu}>Experience</a>
            <a href="#contact" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white" onClick={toggleMenu}>Contact</a>
          </div>
        )}
      </nav>
    </header>
  )
}

