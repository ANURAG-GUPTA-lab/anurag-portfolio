'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import Image from 'next/image'

export default function About() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true })

    renderer.setSize(300, 300)

    const geometry = new THREE.SphereGeometry(1, 32, 32)
    const material = new THREE.MeshBasicMaterial({ color: 0x6366f1, wireframe: true })
    const sphere = new THREE.Mesh(geometry, material)

    scene.add(sphere)

    camera.position.z = 2

    const animate = () => {
      requestAnimationFrame(animate)

      sphere.rotation.x += 0.01
      sphere.rotation.y += 0.01

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      // Clean up Three.js resources
    }
  }, [])

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <div className="relative">
              <Image
                src="/placeholder.svg"
                alt="Anurag Gupta"
                width={300}
                height={300}
                className="rounded-full"
              />
              <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" width={300} height={300} />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Anurag Gupta</h1>
            <h2 className="text-2xl mb-4 text-gray-600 dark:text-gray-300">Full Stack Developer & Cybersecurity Enthusiast</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm an engineering student passionate about full-stack development and cybersecurity. 
              With a strong foundation in modern technologies like Next.js, Three.js, and Express.js, 
              I create innovative and secure web applications that push the boundaries of what's possible on the web.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Get in Touch
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

