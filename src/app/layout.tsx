import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Shafiuddin Chowdury | Software Engineer',
  description: 'Frontend-focused Full Stack Developer specializing in React, Next.js, and TypeScript. Building high-performance web experiences with the PERN stack.',
  keywords: ['Software Engineer', 'Frontend Developer', 'React', 'Next.js', 'TypeScript', 'PERN Stack', 'Web Developer', 'Bangladesh'],
  authors: [{ name: 'Shafiuddin Chowdury' }],
  creator: 'Shafiuddin Chowdury',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shafiuddin.dev',
    title: 'Shafiuddin Chowdury | Software Engineer',
    description: 'Frontend-focused Full Stack Developer specializing in React, Next.js, and TypeScript.',
    siteName: 'Shafiuddin Chowdury Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shafiuddin Chowdury | Software Engineer',
    description: 'Frontend-focused Full Stack Developer specializing in React, Next.js, and TypeScript.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <script dangerouslySetInnerHTML={{ __html: `localStorage.removeItem('theme')` }} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}