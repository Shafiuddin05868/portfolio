'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === 'dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative"
    >
      {mounted ? (
        <>
          <motion.div
            initial={false}
            animate={{ rotate: isDark ? 0 : 180, scale: isDark ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            <Moon className="h-5 w-5" />
          </motion.div>
          <motion.div
            initial={false}
            animate={{ rotate: !isDark ? 0 : -180, scale: !isDark ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            <Sun className="h-5 w-5" />
          </motion.div>
        </>
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}