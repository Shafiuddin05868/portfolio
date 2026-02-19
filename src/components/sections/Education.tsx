'use client'

import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { GlassCard } from '@/components/shared/GlassCard'

const education = [
  {
    degree: 'B.Sc in Computer Science & Engineering',
    institution: 'National University',
    location: 'Bangladesh',
    year: '2023',
    score: 'CGPA: 2.79',
  },
  {
    degree: 'Higher Secondary School Certificate (HSC)',
    institution: 'Govt. Dohar Nowabganj College',
    location: 'Dhaka, Bangladesh',
    year: '2019',
    score: 'GPA: 3.75',
    group: 'Science',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Bandura Holy Cross High School & College',
    location: 'Dhaka, Bangladesh',
    year: '2017',
    score: 'GPA: 4.32',
    group: 'Science',
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Education <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic background and achievements
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <GlassCard className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">{edu.degree}</h3>
                    <p className="text-primary text-sm font-medium mb-2">{edu.institution}</p>
                    
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        <span className="text-foreground font-medium">{edu.score}</span>
                      </div>
                    </div>

                    {edu.group && (
                      <span className="inline-block mt-2 px-2 py-1 text-xs rounded-full bg-secondary">
                        {edu.group}
                      </span>
                    )}
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}