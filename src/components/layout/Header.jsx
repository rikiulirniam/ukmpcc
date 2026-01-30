import { useState, useEffect } from 'react'
import Button from '../common/Button'

export default function Header() {
  const [navStyle, setNavStyle] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const eventSection = document.getElementById('event')
      const aboutSection = document.getElementById('tentang')
      
      if (!eventSection || !aboutSection) return

      const eventPosition = eventSection.offsetTop
      const aboutPosition = aboutSection.offsetTop
      const scrollPosition = window.scrollY + 100

      if (scrollPosition >= eventPosition) {
        setNavStyle('event') // Event dan seterusnya
      } else if (scrollPosition >= aboutPosition) {
        setNavStyle('about') // About section
      } else {
        setNavStyle('hero') // Hero section
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getNavClasses = () => {
    switch(navStyle) {
      case 'hero':
        return 'border-white/10 bg-blue-diagonal shadow-sm'
      case 'about':
        return 'border-white/20 bg-white/10 backdrop-blur-md shadow-lg'
      case 'event':
        return 'border-white/20 bg-blue-600/60 backdrop-blur-md shadow-lg'
      default:
        return 'border-white/10 bg-blue-diagonal shadow-sm'
    }
  }

  const links = [
    ['#home','Home'],
    ['#tentang','About Us'],
    ['#event','Event'],
    ['#galeri','Gallery'],
    ['#struktur','Struktur Organisasi'],
  ]
  return (
    <header className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${getNavClasses()}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2" aria-label="Go to home">
          <img src="/assets/logopcc.png" alt="Logo PCC" className="h-8 w-8" loading="lazy" />
          <span className="text-sm font-semibold text-white">Polytechnic Computer Club</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm sm:flex" aria-label="Primary navigation">
          {links.map(([href,label]) => (
            <a
              key={href}
              href={href}
              className="relative font-medium text-white/80 transition focus:outline-none hover:text-white focus-visible:text-white"
            >
              <span className="after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white/80 after:transition-all hover:after:w-full focus-visible:after:w-full"></span>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
