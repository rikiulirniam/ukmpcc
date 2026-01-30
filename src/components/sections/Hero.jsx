import Button from '../common/Button'
import { SITE_NAME } from '../../utils/env'

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden text-white">
      {/* Base gradient background */}
      <div className="absolute inset-0 -z-10 bg-blue-diagonal" />
      {/* Radial glow (subtle) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
                    backgroundImage: "url('/assets/pcc-hero.webp')",
                }}
      />
      {/* Dot grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          background: "black",
          backgroundSize: '24px 24px',
          backgroundPosition: '12px 12px',
        }}
      />
      {/* Blur accent orb */}
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 -z-10 h-96 w-96 rounded-full bg-gradient-to-tr from-primary-dark via-accent-blue to-accent-indigo opacity-50 blur-3xl"
      />
        <img
          src="/assets/toa.png"
          alt={`${SITE_NAME} logo`}
          className="h-full absolute -z-10 top-0 w-auto drop-shadow-lg"
          loading="lazy"
        />
      <div className="mx-auto flex max-w-7xl flex-col items-end gap-6 px-4 py-24 text-right sm:py-32">
        <h1
          id="hero-heading"
          className="bg-gradient-to-r from-white via-primary-light to-accent-indigo  bg-clip-text text-4xl font-bold tracking-tight text-white/80 max-w-2xl md:max-w-4xl sm:text-5xl md:text-8xl"
        >
          Polytechnic Computer Club
        </h1>
        <p className="md:text-2xl text-1xl font-bold uppercase tracking-widest text-white/80">2025 / 2026</p>
        {/* <p className="max-w-2xl text-white/90">
          Komunitas pemrograman Politeknik Negeri Semarang: belajar terstruktur, kolaborasi proyek, dan pengembangan skill teknologi untuk karier masa depan.
        </p> */}
        {/* <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button href="#program" className="w-full sm:w-auto bg-white text-primary hover:bg-primary/10 hover:border-primary/10">Lihat Program</Button>
          <Button href="#daftar" variant="outline" className="w-full sm:w-auto border-white/60 text-white hover:bg-white/10">Gabung Sekarang</Button>
        </div> */}
      </div>
    </section>
  )
}
