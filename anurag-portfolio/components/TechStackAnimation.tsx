'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const icons = [
  { src: '/assets/icons/react.png', position: new THREE.Vector3(-1, 0, 0) },
  { src: '/assets/icons/nodejs.png', position: new THREE.Vector3(1, 0, 0) },
  { src: '/assets/icons/typescript.png', position: new THREE.Vector3(0, 1, 0) },
  { src: '/assets/icons/python.png', position: new THREE.Vector3(0, -1, 0) },
  { src: '/assets/icons/cybersecurity.png', position: new THREE.Vector3(0, 0, 1) },
]

export default function TechStackAnimation() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(200, 200)
    mountRef.current.appendChild(renderer.domElement)

    const iconMeshes = icons.map(icon => {
      const geometry = new THREE.PlaneGeometry(0.5, 0.5)
      const texture = new THREE.TextureLoader().load(icon.src)
      const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.copy(icon.position)
      scene.add(mesh)
      return mesh
    })

    camera.position.z = 2

    const animate = () => {
      requestAnimationFrame(animate)

      iconMeshes.forEach(mesh => {
        mesh.rotation.x += 0.01
        mesh.rotation.y += 0.01
      })

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="w-[200px] h-[200px] mx-auto my-10" />
}

