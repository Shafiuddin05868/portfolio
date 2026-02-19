'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const technologies = [
  { 
    name: 'TypeScript', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  { 
    name: 'Next.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    invertInDark: true,
  },
  { 
    name: 'React', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  { 
    name: 'Redux', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  },
  { 
    name: 'Zustand', 
    logo: 'https://avatars.githubusercontent.com/u/107797639?s=200&v=4',
  },
  { 
    name: 'Node.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  { 
    name: 'PostgreSQL', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  { 
    name: 'Tailwind CSS', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  { 
    name: 'Express.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    invertInDark: true,
  },
  { 
    name: 'MongoDB', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
]

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Tech <span className="text-gradient">Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies I work with to build modern web applications
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            className="flex gap-6 animate-marquee"
            style={{ width: 'fit-content' }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 glass rounded-xl p-6 hover:scale-105 transition-transform cursor-pointer group"
              >
                <div className="w-14 h-14 mb-3 flex items-center justify-center">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className={`w-12 h-12 object-contain transition-transform group-hover:scale-110 ${tech.invertInDark ? 'dark:invert' : ''}`}
                  />
                </div>
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-4 text-center cursor-pointer group"
              >
                <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className={`w-10 h-10 object-contain transition-transform group-hover:scale-110 ${tech.invertInDark ? 'dark:invert' : ''}`}
                  />
                </div>
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}