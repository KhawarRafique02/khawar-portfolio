import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata = {
  title: 'Khawar Rafique — Full Stack Developer',
  description:
    'Software Engineer & Full Stack Developer specializing in React, Next.js, Node.js, Supabase & Firebase. Available worldwide for remote work.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Supabase', 'Firebase', 'Khawar Rafique'],
  openGraph: {
    title: 'Khawar Rafique — Full Stack Developer',
    description: 'Building fast, scalable web applications with modern tech.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
