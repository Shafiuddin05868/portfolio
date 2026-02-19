'use client'

import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { GlassCard } from '@/components/shared/GlassCard'

const experiences = [
  {
    title: 'Junior Software Engineer',
    company: 'Bit Byte Technology Ltd',
    location: 'Dhaka, Bangladesh',
    period: 'January 2025 - Present',
    description: [
      'Created custom form builder for Bitcommerz e-commerce builder with drag and drop user-friendly settings which helps users to add form input into their website.',
      'Transform Figma designs into React, Next.js components using Figma API and Figma MCP for design-to-code automation.',
      'Developed admin panel for Market Intelligence Platform (Export Bangladesh) with collaboration of a strong Backend team.',
      'Gives maintenance supports and new features to existing E-commerce platforms: Gadget and Gear, SSG, Qrius, Export Bangladesh.',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'PostgreSQL'],
  },
  {
    title: 'Hackathon Participant',
    company: 'National University Hackathon | Tejgaon College CSE Fest 2024',
    location: 'Dhaka, Bangladesh',
    period: 'December 2024',
    description: [
      'Participated in an 8-hour intensive coding competition focused on API and full-stack web development.',
      'Built responsive front-end interfaces using React, Next.js, TypeScript, and Redux for efficient state management.',
      'Integrated backend APIs for seamless data handling.',
      'Designed a UI that earned strong recognition at the hackathon.',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Redux', 'REST APIs'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My journey in building impactful web applications
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10" />

                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-12 md:pl-0`}>
                  <GlassCard className="group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                        <Briefcase className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>

                <div className="hidden md:block flex-1" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}