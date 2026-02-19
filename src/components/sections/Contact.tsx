'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { GlassCard } from '@/components/shared/GlassCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s work together to bring your ideas to life.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          <AnimatedSection delay={0.1}>
            <GlassCard className="h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:shafiuddin05868@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      shafiuddin05868@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+8801799979556" className="text-muted-foreground hover:text-primary transition-colors">
                      +880 1799-979556
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Mugda, Dhaka-1214, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-medium mb-4">Connect with me</p>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/shafiuddin" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://linkedin.com/in/shafiuddin" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="mailto:shafiuddin05868@gmail.com">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <GlassCard>
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project inquiry" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell me about your project..." required />
                </div>

                <Button type="submit" variant="glow" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Send className="h-4 w-4 mr-2" />
                    </motion.div>
                  ) : (
                    <Send className="h-4 w-4 mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}