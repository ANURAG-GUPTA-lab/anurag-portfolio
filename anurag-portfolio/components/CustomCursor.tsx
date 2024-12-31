'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateCursorPosition)

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
    }
  }, [])

  return (
    <div
      className="fixed w-16 h-16 pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="w-full h-full relative">
        {/* Outer glow */}
        <div className="absolute inset-0 bg-cyan-400 rounded-full opacity-30 animate-pulse"></div>
        {/* Inner spaceship */}
        <div className="absolute inset-2 bg-cyan-200 rounded-full"></div>
        {/* Cockpit */}
        <div className="absolute inset-4 bg-cyan-600 rounded-full"></div>
        {/* Light beams */}
        <div className="absolute -bottom-4 left-1/2 w-8 h-8 -translate-x-1/2 bg-cyan-400 rounded-full blur-sm animate-ping"></div>
      </div>
    </div>
  )
}

