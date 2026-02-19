import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { TechStack } from '@/components/sections/TechStack'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Hackathon } from '@/components/sections/Hackathon'
import { Education } from '@/components/sections/Education'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Hackathon />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}