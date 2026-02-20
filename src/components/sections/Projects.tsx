'use client'

import { ExternalLink, Github, Layers } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { GlassCard } from '@/components/shared/GlassCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const projects = [
  {
    title: 'EzyMemo',
    subtitle: 'F-Commerce Management Tool',
    description: 'A full stack web application to manage small and F-Commerce businesses and showcase their products, get customers order directly from their EzyMemo Store.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    image: '/images/ezymemo.png',
    link: 'https://ezymemo.com',
    githubUrl: 'https://github.com/Web-of-Shafiuddin/quick_memo',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Export Bangladesh',
    subtitle: 'Market Intelligence Platform',
    description: 'Developed full admin dashboard for managing importers, exporters, products, and role permissions. Also worked on maintenance of seller, buyer dashboard and homepage.',
    technologies: ['Next.js', 'TypeScript', 'Redux', 'PostgreSQL', 'Tailwind CSS'],
    image: '/images/export-bangladesh.png',
    link: 'https://exportbangladesh.org',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Bitcommerz',
    subtitle: 'E-commerce Builder Platform',
    description: 'Built custom themes, widgets, and a drag-and-drop form builder for e-commerce websites. Enabled users to easily add form inputs to their websites.',
    technologies: ['Next.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'Figma API'],
    image: '/images/bitcommerz.png',
    link: 'https://bitcommerz.com',
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Gadget and Gear',
    subtitle: 'E-commerce Platform',
    description: 'Worked on maintenance, improvements, and new features for admin dashboard and homepage of this major electronics retail platform.',
    technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL'],
    image: '/images/gadget-gear.png',
    link: 'https://gadgetandgear.com',
    color: 'from-green-500 to-emerald-500',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-world applications I&apos;ve built and contributed to
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <GlassCard className="h-full group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <div className="text-white text-4xl font-bold opacity-50">
                      <Layers className="h-16 w-16" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button variant="glow" size="sm" asChild>
                      <Link href={project.link} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Demo
                      </Link>
                    </Button>
                    {project.githubUrl && <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}