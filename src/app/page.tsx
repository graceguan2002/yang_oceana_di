'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <main className="relative min-h-screen bg-neutral-100">
      {/* Top Bar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-white shadow z-50">
        <div className="text-l flex items-center gap-2">
          🧠 <span>Yang (Oceana) Di</span>
        </div>
        <nav className="flex gap-6 text-md ">
          <Link href="#home">Home</Link>
          <Link href="#cv">CV</Link>
          <Link href="#publication">Publication</Link>
          <Link href="#profile">Profile</Link>
        </nav>
      </header>

      {/* Brain Section */}
      <section id="home"  className="h-screen w-screen flex justify-center items-center bg-white">
        <div className="relative w-[600px] h-[600px]">
          <Image
            src="/image/brain.jpg"
            alt="Brain Graphic"
            fill
            className="object-contain"
          />

          {/* Clickable Areas */}
          <Link href="#cv">
            <motion.div
              onHoverStart={() => setHovered('cv')}
              onHoverEnd={() => setHovered(null)}
              className="absolute left-[52%] top-[18%] w-[120px] h-[100px] cursor-pointer"
              animate={{ scale: hovered === 'cv' ? 1.1 : 1, backgroundColor: hovered === 'cv' ? '#fde68a' : 'transparent' }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          <Link href="#publication">
            <motion.div
              onHoverStart={() => setHovered('pub')}
              onHoverEnd={() => setHovered(null)}
              className="absolute left-[38%] top-[25%] w-[90px] h-[90px] cursor-pointer"
              animate={{ scale: hovered === 'pub' ? 1.1 : 1, backgroundColor: hovered === 'pub' ? '#a5f3fc' : 'transparent' }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          <Link href="#profile">
            <motion.div
              onHoverStart={() => setHovered('profile')}
              onHoverEnd={() => setHovered(null)}
              className="absolute left-[65%] top-[50%] w-[90px] h-[140px] cursor-pointer"
              animate={{ scale: hovered === 'profile' ? 1.1 : 1, backgroundColor: hovered === 'profile' ? '#c4b5fd' : 'transparent' }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </div>
      </section>

      {/* Other Sections */}
      <section
        id="profile"
        className="min-h-screen bg-white px-10 py-20 flex items-center"
      >
        {/* Left: Text*/}
        <div className="w-2/3 pr-8">
          <h1 className="text-3xl font-bold mb-4">Yang (Oceana) Di</h1>
          <h3 className="text-xl mb-1">Cognitive Psychology</h3>
          <h3 className="text-xl mb-4">Ph.D 1st year @ Buffalo University</h3>
          <p className="text-base leading-relaxed">
            My general interest lies in cognitive science and psycholinguistics. More specifically, I am interested in prosody, attention, working memory, and multilingualism.
          </p>
        </div>

        {/* Right: Profile Image*/}
        <div className="w-1/3 flex justify-center">
          <div className="w-64 h-64 rounded-full border-4 border-black overflow-hidden">
            <Image
              src="/image/profile.jpg"
              alt="Profile"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>


      
      <section id="cv" className="min-h-screen bg-white px-10 py-20">
        <h2 className="text-3xl font-bold mb-4">Curriculum Vitae</h2>
        <p>Insert your CV content here.</p>
      </section>

      <section id="publication" className="min-h-screen bg-gray-100 px-10 py-20">
        <h2 className="text-3xl font-bold mb-4">Publications</h2>
        <p>Insert your publication list here.</p>
      </section>


    </main>
  )
}
