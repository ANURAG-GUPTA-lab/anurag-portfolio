'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import Image from 'next/image'

const projects = [
  {
    title: 'Next.js E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, Express.js, and MongoDB.',
    image: '/placeholder.svg',
    techStack: ['Next.js', 'Express.js', 'MongoDB', 'Stripe'],
    demoLink: 'https://example.com/ecommerce-demo',
    githubLink: 'https://github.com/username/ecommerce-project',
    modelType: 'cube',
  },
  {
    title: 'Three.js Portfolio Showcase',
    description: 'An interactive 3D portfolio website created using Three.js and React.',
    image: '/placeholder.svg',
    techStack: ['React', 'Three.js', 'WebGL', 'Framer Motion'],
    demoLink: 'https://example.com/portfolio-demo',
    githubLink: 'https://github.com/username/portfolio-project',
    modelType: 'sphere',
  },
  {
    title: 'Cybersecurity Vulnerability Scanner',
    description: 'A tool for identifying potential security vulnerabilities in web applications.',
    image: '/placeholder.svg',
    techStack: ['Python', 'Django', 'SQLite', 'Beautiful Soup'],
    demoLink: 'https://example.com/scanner-demo',
    githubLink: 'https://github.com/username/vulnerability-scanner',
    modelType: 'cone',
  },
]

function ProjectCard({ title, description, image, techStack, demoLink, githubLink, modelType }: {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoLink: string;
  githubLink: string;
  modelType: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true })

    renderer.setSize(200, 200)

    let geometry: THREE.BufferGeometry

    switch (modelType) {
      case 'cube':
        geometry = new THREE.BoxGeometry(1, 1, 1)
        break
      case 'sphere':
        geometry = new THREE.SphereGeometry(0.7, 32, 32)
        break
      case 'cone':
        geometry = new THREE.ConeGeometry(0.7, 1, 32)
        break
      default:
        geometry = new THREE.BoxGeometry(1, 1, 1)
    }

    const material = new THREE.MeshBasicMaterial({ color: 0x6366f1, wireframe: true })
    const mesh = new THREE.Mesh(geometry, material)

    scene.add(mesh)

    camera.position.z = 2

    const animate = () => {
      requestAnimationFrame(animate)

      mesh.rotation.x += 0.01
      mesh.rotation.y += 0.01

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      // Clean up Three.js resources
    }
  }, [modelType])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" width={200} height={200} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4 mt-4">
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Live Demo
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

