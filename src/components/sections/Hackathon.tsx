'use client'

import { motion } from 'framer-motion'
import { Trophy, Clock, Code2, MapPin, Calendar } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

export function Hackathon() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Hackathon <span className="text-gradient">Spotlight</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A highlight of my competitive programming experience
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-glow" />
            <div className="absolute inset-0 glass rounded-2xl" />
            
            <div className="relative p-8 md:p-12 rounded-2xl">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-primary to-accent text-white shrink-0"
                >
                  <Trophy className="h-12 w-12" />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    National University Hackathon 2024
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    Tejgaon College CSE Fest
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      December 2024
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      8-Hour Intensive Coding
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      Dhaka, Bangladesh
                    </span>
                  </div>

                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-start gap-2">
                      <Code2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>
                        Participated in an 8-hour intensive coding competition focused on API and full-stack web development.
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Code2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>
                        Built responsive front-end interfaces using React, Next.js, TypeScript, and Redux for efficient state management.
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Code2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>
                        Designed a UI that earned strong recognition at the hackathon.
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {['React', 'Next.js', 'TypeScript', 'Redux', 'REST APIs'].map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}