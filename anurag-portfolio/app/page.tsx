import dynamic from 'next/dynamic'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import NameTag from '../components/NameTag'
import GlobeLocation from '../components/GlobeLocation'
import TechStackAnimation from '../components/TechStackAnimation'

const ThreeBackground = dynamic(() => import('../components/ThreeBackground'), { ssr: false })
const CustomCursor = dynamic(() => import('../components/CustomCursor'), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 relative">
      <ThreeBackground />
      <CustomCursor />
      <NameTag />
      <div className="relative z-10">
        <Header />
        <About />
        <TechStackAnimation />
        <Skills />
        <TechStackAnimation />
        <Projects />
        <TechStackAnimation />
        <Experience />
        <Testimonials />
        <Contact />
        <GlobeLocation />
        <Footer />
      </div>
    </main>
  )
}

