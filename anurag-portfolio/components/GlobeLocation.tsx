'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function GlobeLocation() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [isInteracting, setIsInteracting] = useState(false)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(300, 300)
    mountRef.current.appendChild(renderer.domElement)

    // Earth
    const earthGeometry = new THREE.SphereGeometry(1, 32, 32)
    const earthTexture = new THREE.TextureLoader().load('/earth_texture.jpg')
    const earthMaterial = new THREE.MeshPhongMaterial({ 
      map: earthTexture,
      bumpMap: earthTexture,
      bumpScale: 0.05,
    })
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial)
    scene.add(earthMesh)

    // Atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(1.01, 32, 32)
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x7cc0ff,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide,
    })
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
    scene.add(atmosphereMesh)

    // India marker
    const markerGeometry = new THREE.SphereGeometry(0.03, 16, 16)
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
    const markerMesh = new THREE.Mesh(markerGeometry, markerMaterial)
    
    // Position for India (approximate)
    const latitude = 20.5937 * Math.PI / 180
    const longitude = 78.9629 * Math.PI / 180
    const radius = 1.02 // Slightly above the Earth's surface
    markerMesh.position.set(
      radius * Math.cos(latitude) * Math.sin(longitude),
      radius * Math.sin(latitude),
      radius * Math.cos(latitude) * Math.cos(longitude)
    )
    scene.add(markerMesh)

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(5, 3, 5)
    scene.add(pointLight)

    camera.position.z = 2.5

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.enableZoom = false

    controls.addEventListener('start', () => setIsInteracting(true))
    controls.addEventListener('end', () => setIsInteracting(false))

    let lastTime = 0
    const rotationSpeed = 0.00005 // Adjust this value to change the automatic rotation speed

    // Animation
    const animate = (time: number) => {
      requestAnimationFrame(animate)

      const delta = time - lastTime
      lastTime = time

      if (!isInteracting) {
        earthMesh.rotation.y += rotationSpeed * delta
        atmosphereMesh.rotation.y += rotationSpeed * delta
      }

      controls.update()
      renderer.render(scene, camera)
    }

    animate(0)

    // Cleanup
    return () => {
      controls.removeEventListener('start', () => setIsInteracting(true))
      controls.removeEventListener('end', () => setIsInteracting(false))
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [isInteracting])

  return (
    <div className="flex justify-center items-center py-10">
      <div 
        ref={mountRef} 
        className="w-[300px] h-[300px] cursor-move" 
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
      />
    </div>
  )
}

